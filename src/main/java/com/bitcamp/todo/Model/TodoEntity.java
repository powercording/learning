package com.bitcamp.todo.Model;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity                  // 자바 클래스를 엔티티로 지정
@Table(name = "todo")    // 테이블 이름을 지정
public class TodoEntity {

    //오브젝트 아이디 @id 는 기본 키가 될 필드에 지정을한다.
    @Id //primanry key 설정
    @GeneratedValue(generator = "uuid2") // ID자동생성
    @GenericGenerator(name = "uuid2", strategy = "uuid2") // 전략뭔데
    private String id;

    // 원래 @column("name" = userId) 이 붙어야 하지만 @Table 이 있기 때문에 생략 할 수 있다.
    private String userId;
    private String title;
    private boolean done;
}
