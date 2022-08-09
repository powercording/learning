package com.bitcamp.todo.Controller;


import com.bitcamp.todo.Service.UserService;
import com.bitcamp.todo.dto.ResponseDTO;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    private password

    /**
     * 회원가입
     * http://localhost:8080/auth/signup
     */

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            //수신 데이터 유효성 검사
            if (userDTO == null || userDTO.getPassword() == null){
                throw new RuntimeException("invalid password value");
            }
            // 요청을 이용해 저장할 유저 객체를 만들기
            UserEntity user = UserEntity.builder()
                    .username(userDTO.getUsername())
                    .build();
            return ResponseEntity.ok().body(user);
        } catch (Exception e) {
            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }


}
