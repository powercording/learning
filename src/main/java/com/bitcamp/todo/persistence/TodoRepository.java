package com.bitcamp.todo.persistence;
// Mybatis 의 매퍼개념?

import com.bitcamp.todo.Model.TodoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String> {

    List<TodoEntity> findByUserId(String userId);

    // (?1) 은 메서드의 매개변수의 순서 위치.
    @Query("SELECT t FROM TodoEntity t WHERE t.userId = ?1")
    TodoEntity findByUserIdQuery(String userId);


}
