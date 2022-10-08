package com.bitcamp.todo.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // 설정을 스프링 빈(bean)으로 등록. 빈은 컨테이너에 모여 beans 가 된다.
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override   //WebMvcConfigurer 의 cors 메소드 재정의
    public void addCorsMappings(CorsRegistry registry) {
        //맵핑 주소 설정.
        registry.addMapping("/**")
                //허용할 포트번호 설정
                .allowedOrigins("http://localhost:3000", "http://192.168.0.4:3000")
                //허용할 HTTP 메소드 설정
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                //허용할 HTTP 헤더
                .allowedHeaders("*")
                //유효시간
                .maxAge(MAX_AGE_SECS);
    }
}
