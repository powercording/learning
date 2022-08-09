package com.bitcamp.todo.Controller;


import com.bitcamp.todo.Model.UserEntity;
import com.bitcamp.todo.Service.UserService;
import com.bitcamp.todo.dto.ResponseDTO;
import com.bitcamp.todo.dto.UserDTO;
import com.bitcamp.todo.security.TokenProvider;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserService userService;

    private PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Autowired
    private TokenProvider tokenProvider;

    /**
     * 회원가입
     * http://localhost:8080/auth/signup
     */

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody UserDTO userDTO) {
        try {
            //수신 데이터 유효성 검사
            if (userDTO == null || userDTO.getPassword() == null) {
                throw new RuntimeException("invalid password value");
            }
            // 요청을 이용해 저장할 유저 객체를 만들기
            UserEntity user = UserEntity.builder()
                    .username(userDTO.getUsername())
                    .password(passwordEncoder.encode(userDTO.getPassword()))
//                    .password(userDTO.getPassword())
                    .build();

            //서비스를 이용해 리포지토리에 유저 저장.
            UserEntity registeredUser = userService.create(user);

            //응답 객체 만들기 (비밀번호 제외)
            UserDTO responseUserDTO = UserDTO.builder()
                    .id(registeredUser.getId())
                    .username((registeredUser.getUsername()))
                    .build();

            // 유저 정보는 항상 하나이므로 리스트로 만들 필요 없음.
            //RespoㅜseDTO 를 사용하지 않고 UserDTO 타입으로 반환
            return ResponseEntity.ok().body(responseUserDTO);

        } catch (Exception e) {
            ResponseDTO responseDTO = ResponseDTO.builder().error(e.getMessage()).build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }

    /**
     * 로그인
     * http://localhost:8080/auth/signin
     */
    @PostMapping("/signin")
    public ResponseEntity<?> authenticate(@RequestBody UserDTO userDTO) {
        // 유저 정보 확인하기.
        UserEntity user = userService.getByCredentials(userDTO.getUsername(), userDTO.getPassword(), passwordEncoder);
        if (user != null) {
            final String token = tokenProvider.create(user);

            final UserDTO responseUserDTO = UserDTO.builder()
                    .username(user.getUsername())
                    .id(user.getId())
                    .token(token)
                    .build();
            return ResponseEntity.ok().body(responseUserDTO);
        } else {
            ResponseDTO responseDTO = ResponseDTO.builder()
                    .error("login falied")
                    .build();
            return ResponseEntity.badRequest().body(responseDTO);
        }
    }


}
