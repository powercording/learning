package com.bitcamp.todo.dto;

import com.bitcamp.todo.Model.TodoEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TodoDTO {
    /*
    아이템 생성, 수정, 삭제
     */
    private String id;
    private String title;
    private boolean done;

    //엔티티 데이터를 적용시킴/
    public TodoDTO(final TodoEntity todoEntity) {
        this.id = todoEntity.getId();
        this.title = todoEntity.getTitle();
        this.done = todoEntity.isDone();
    }

    //시리얼라이즈 함수 사용
    public static TodoEntity toEntity(final TodoDTO dto) {
        return TodoEntity.builder()
                .id(dto.getId())
                .title(dto.getTitle())
                .done(dto.isDone())
                .build();
    }
}
