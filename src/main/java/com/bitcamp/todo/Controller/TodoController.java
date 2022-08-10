package com.bitcamp.todo.Controller;

import com.bitcamp.todo.Model.TodoEntity;
import com.bitcamp.todo.Service.TodoService;
import com.bitcamp.todo.dto.ResponseDTO;
import com.bitcamp.todo.dto.TodoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("todo")
public class TodoController {

    @Autowired
    private TodoService service;

    /**
     * 할일 목록을 생성한다.
     */
    @PostMapping
    public ResponseEntity<?> createTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO DTO) {
        try {
            //temp: 임시 아이디를 생성 (교육 /테스트용)
//            String temporaryUserId = "temporary-user";
            // (1) TodoEntity 로 변환.
            TodoEntity entity = TodoDTO.toEntity(DTO);
            // (2) Id를 Null 로 초기화 한다.  생성 당시에는 Id가 없어야 하기 때문.
            entity.setId(null);
            // (3) 임시 유저 id를 설정해 준다. (현재 DTO 에는 유저아이디가 존재하지 않기때문에 엔티티에 직접 설정함)
            entity.setUserId(userId);
            // 서비스를 이용해 Entity 를 생성한다.
            List<TodoEntity> entities = service.create(entity);
            // (5) 자바 스트림을 이용해 리턴된 엔티티 리스트를 TodoDTO 리스트로 변환
            List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
            // (6) 변환된 TodoDTO 리스트를 이용해 ResponseDTO 를 초기화
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().responseList(dtos).build();
            // (7) ResponseDTO 를 리턴
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();
            return ResponseEntity.badRequest().body(response);
        }

    }

    /**
     * 조회 (Retrive Todo 구현)
     */
    @GetMapping
    public ResponseEntity<?> retrieveTodoList(@AuthenticationPrincipal String userId) {
//        String temporaryUserId = "temporary-user";
        List<TodoEntity> entities = service.retrieve(userId);
        List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().responseList(dtos).build();

        return ResponseEntity.ok().body(response);
    }

    /**
     * 수정(Update Todo 구현)
     */
    @PutMapping
    public ResponseEntity<?> updateTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO todoDTO) {
//        String temporaryUserId = "Temporary-User";

        TodoEntity entity = TodoDTO.toEntity(todoDTO);
        entity.setUserId(userId);

        List<TodoEntity> entities = service.update(entity);
        List<TodoDTO> dots = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
        ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().responseList(dots).build();

        return ResponseEntity.ok().body(response);
    }

    //삭제
    @DeleteMapping
    public ResponseEntity<?> deleteTodo(@AuthenticationPrincipal String userId, @RequestBody TodoDTO dto) {
        try {
//            String temporaryUserId = "Temporary-User";

            TodoEntity entity = TodoDTO.toEntity(dto);
            entity.setUserId(userId);


            List<TodoEntity> entities = service.delete(entity);
            List<TodoDTO> dtos = entities.stream().map(TodoDTO::new).collect(Collectors.toList());
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().responseList(dtos).build();

            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            String error = e.getMessage();
            ResponseDTO<TodoDTO> response = ResponseDTO.<TodoDTO>builder().error(error).build();

            return ResponseEntity.badRequest().body(response);
        }

    }

}
