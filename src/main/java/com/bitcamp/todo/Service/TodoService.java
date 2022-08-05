package com.bitcamp.todo.Service;

import com.bitcamp.todo.Model.TodoEntity;
import com.bitcamp.todo.persistence.TodoRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        //(3)로그 생성 및 리스트 리턴.
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

    // 조회
    public List<TodoEntity> retrieve(final String userId) {
        return todoRepository.findByUserId((userId));
    }

    //수정
    public List<TodoEntity> update(final TodoEntity entity) {
        validate(entity);
        final Optional<TodoEntity> original = todoRepository.findById(entity.getId());

        original.ifPresent(todo -> {
            //반환된 TodoEntity 가 존재 하면값을 새 entity 의 값으로 덮어쓴다.
            todo.setTitle(entity.getTitle());
            todo.setDone(entity.isDone());

            //데이터베이스에 새 값을 저장한다.
            todoRepository.save(todo);
        });
        return retrieve(entity.getUserId());
    }

    //삭제
    public List<TodoEntity> delete(final TodoEntity entity) {
        //유효성 체크
        validate(entity);
        try {
            //엔티티 삭제
            todoRepository.delete(entity);
        } catch (Exception e) {
            //Exception 발생시 id와 exception 을 로깅한다.
            log.error("error deleting entity", entity.getId(), e);
            throw new RuntimeException("error deleting entity" + entity.getId());
        }
        //새 Todo 리스트를 가져와 리턴
        return retrieve(entity.getUserId());
    }


}

