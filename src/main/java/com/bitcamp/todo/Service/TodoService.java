package com.bitcamp.todo.Service;

import com.bitcamp.todo.Model.TodoEntity;
import com.bitcamp.todo.persistence.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Slf4j
@Service
public class TodoService {
    @Autowired
    private TodoRepository todoRepository;

    public List<TodoEntity> create(final TodoEntity entity) {
        //(1)유효성 검증
        validate(entity);
        //(2)저장
        todoRepository.save(entity);

        log.info("Entity id : {} is saved", entity.getId());
        return todoRepository.findByUserId(entity.getUserId());
    }


    private void validate(final TodoEntity entity) {
        //(1)유효성 검증
        if (entity == null) {
            log.warn("Entity 이(가) null 값을 가지고 있습니다. Entity can not be 'Null'");
            throw new RuntimeException("Entity is null");
        }
        if (entity.getUserId() == null) {
            log.warn("Entity 의 Id가 null 값을 가지고 있습니다. Entity.getId() is 'Null'");
            throw new RuntimeException(" Entity.getId() is 'Null'");
        }
    }
}
