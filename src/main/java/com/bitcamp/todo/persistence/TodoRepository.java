package com.bitcamp.todo.persistence;
// Mybatis 의 매퍼개념?

import com.bitcamp.todo.Model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {

    List<TodoEntity> findByUserId(String userId);

}
