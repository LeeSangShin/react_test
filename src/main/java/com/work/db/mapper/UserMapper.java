package com.work.db.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.work.db.dto.User;

@Repository
@Mapper
public interface UserMapper {
    List<User> selectUserList();
    User selectUser(User param);
    String checkUserId(User param);
    int createUser(User param);
}
