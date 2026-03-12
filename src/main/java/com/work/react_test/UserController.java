package com.work.react_test;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.work.db.dto.User;
import com.work.db.service.UserService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;




@RestController
@RequestMapping("/api")
public class UserController {

@Autowired
private UserService userService;
    private Logger log = LoggerFactory.getLogger(this.getClass());

    @GetMapping("/mypage")
    public String hello(){
        return "Call mypage " + new Date();
    }
    @GetMapping("/work_page")
    public String home(){
        return "Call work_page " + new Date();
    }

    @GetMapping("/getAllUser")
    public List<User> getAllUser() {
        List<User> users = userService.getUserList();
        log.debug("getAllUser return: {}", users);
        return users;
    }
    
    @PostMapping("/getUserById")
    public User getUserById(@RequestBody User param) {
        log.debug("getUserById param: {}", param);
        User user = userService.getUser(param);
        return user;
    }
    @PostMapping("/checkUserId")
    public String checkUserId(@RequestBody User param) {
        log.debug("checkUserId param: {}", param);
        String result = userService.checkUserId(param);
        if(result == null){
            result = "Y";
        }
        log.debug("checkUserId result: {}", result);
        return result;
    }

    @PostMapping("/createUser")
    public boolean createUser(@RequestBody User param) {
        log.debug("createUser param: {}", param);
        int result = userService.createUser(param);
        return (result > 0);
    }
}
