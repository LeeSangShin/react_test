package com.work.react_test;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.work")
@MapperScan("com.work.db.mapper")
public class ReactTestApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReactTestApplication.class, args);
	}

}
