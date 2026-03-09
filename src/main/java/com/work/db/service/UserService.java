package com.work.db.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.work.db.dto.User;
import com.work.db.mapper.UserMapper;

@Service
public class UserService {

@Autowired
private UserMapper userMapper;

public List<User> getUserList() {
    return userMapper.selectUserList();
}
public User getUser(User param) {
    return userMapper.selectUser(param);
} 

}
