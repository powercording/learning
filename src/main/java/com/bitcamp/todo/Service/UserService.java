package com.bitcamp.todo.Service;

import com.bitcamp.todo.Model.UserEntity;
import com.bitcamp.todo.persistence.UserRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Slf4j
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 아이디 및 이메일 유요성 및 중복 검사
    public UserEntity create(final UserEntity userEntity) {
        // userEntitu 유효성 검사
        if (userEntity == null || userEntity.getUsername() == null) {
            throw new RuntimeException("invalid argument");
        }
        final String username = userEntity.getUsername();

        //중복검사
        if (userRepository.existsByUsername(username)) {
            log.warn("Username already exists {}", username);
            throw new RuntimeException("Username already exists");
        }
        return userRepository.save(userEntity);
    }

//    //아이디와 비밀번호 일치하는지 확인
//    public UserEntity getByCredentials(final String username, final String password) {
//        final UserEntity originalUser = userRepository.findByUsername(username);
//
//        //matches
//    }
}
