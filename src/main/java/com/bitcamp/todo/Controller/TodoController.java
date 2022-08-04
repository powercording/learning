package com.bitcamp.todo.Controller;

import com.bitcamp.todo.Model.TodoEntity;
import com.bitcamp.todo.Service.TodoService;
import com.bitcamp.todo.dto.TodoDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RestController
@RequestMapping("todo")
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping
    public ResponseEntity<?> createTodo(@RequestBody TodoDTO DTO) {
        try{
            String temporaryUserId = "temporary-user";
            // (1) TodoEntity 로 변환.
            TodoEntity entity = TodoDTO.todoEntity(DTO);
            // (2) Id를 Null 로 초기화 한다.  생성 당시에는 Id가 없어야 하기 때문.
            entity.setId(null);
            // (3) 임시 유저 id를 설정해 준다. (현재 DTO 에는 유저아이디가 존재하지 않기때문에 엔티티에 직접 설정함)
            entity.setUserId(temporaryUserId);
            // 서비스를 이용해 Entity를 생성한다.

        } catch (Exception e) {
            String error = e.getMessage();
            return ResponseEntity.badRequest().body(response)
        }
    }



}
