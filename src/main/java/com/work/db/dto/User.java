package com.work.db.dto;

import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class User extends BasicDto{
    private String searchId;
    private String searchName;

    private String id;
    private String name;
    private String age;
}
