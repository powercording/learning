package com.bitcamp.todo.security;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
@Component
public class JwtAthenticationFilter extends OncePerRequestFilter {
    @Autowired
    private TokenProvider tokenProvider;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            //요청에서 토큰 가져오기
            String token = parseBearerToken(request);
            log.info("Filter is running...");
            System.out.println(" 어센티케이션 어노테이션 파라미터 request :" + request);
            System.out.println("bearer token parsing 값: " + token);

            //토큰검증 및 시큐리티 등록
            if (token != null && !token.equalsIgnoreCase("null")) {
                String userId = tokenProvider.validateAndGetUserId(token);
                log.info("Authenticated UserId : " + userId);

                System.out.println("tokenprovider 의 validateAng Get userId의 userId : " + userId);

                // 인증 완료 : SecurityContextHolder 에 등록 해야 인증된 사용자로 판단.
                AbstractAuthenticationToken authenticationToken =
                        new UsernamePasswordAuthenticationToken(
                                userId, null, AuthorityUtils.NO_AUTHORITIES
                        );
                System.out.println("authenticationToken 디테일 set 이전 :" + authenticationToken);
                authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                System.out.println("authenticationToken 디테일 set 이후:" + authenticationToken);

                SecurityContext securityContext = SecurityContextHolder.createEmptyContext();

                System.out.println("시큐리티 컨텍스트 홀더의 createEmptyContext -> securityContext : " + securityContext);

                securityContext.setAuthentication(authenticationToken);

                System.out.println("시큐리티 컨텍스트 셋 어센티케이션  : " + securityContext);

                SecurityContextHolder.setContext(securityContext);

                System.out.println("컨텍스트 홀더에 셋 컨텍스트(시큐리티컨텍스트) 완료.");
            }
        } catch (Exception e) {
            logger.error("Could not set user authentication in security context", e);
        }
        filterChain.doFilter(request, response);
    }

    //HTTP 요청의 헤더를 파싱해서  Bearer 토큰을 리턴한다.
    private String parseBearerToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");

        System.out.println("bearerToken 베어러 토큰 :" + bearerToken);

        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {

            System.out.println("bearerToken.subString 섭스트링 추출 :" + bearerToken.substring(7));

            return bearerToken.substring(7);
        }
        return null;
    }
}
