package com.reseausocial;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="info")
public class Info {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(name="name")
    private String name;
    @OneToOne
    private User user;
    
    public Info(){

    }
    public Info(int id,String name){
        this.id=id;
        this.name=name;

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
