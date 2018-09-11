package com.reseausocial;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="utilisateurs")
public class User {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(name="login")
    private String login;
    @Column(name="password")
    private String password;
    @OneToOne(mappedBy="user")
    @JoinColumn(name="infoid")
    private Info info;
    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="relation",
            joinColumns=@JoinColumn(name="userid"),
            inverseJoinColumns=@JoinColumn(name="amisid")

    )
    private List<User> amiList=new ArrayList<>();
    @OneToMany(mappedBy="author")
    private List<Message>messageList=new ArrayList<>();

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="likes",
            joinColumns=@JoinColumn(name="userid"),
            inverseJoinColumns=@JoinColumn(name="likeid")
    )
    private List<Message>likedList=new ArrayList<>();

    public User(){

    }
    public User(int id,String login,String password){
        this.id=id;
        this.login=login;
        this.password=password;

    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Info getInfoid() {
        return info;
    }

    public void setInfoid(int infoid) {
        this.info = info;
    }

    public Info getInfo() {
        return info;
    }

    public void setInfo(Info info) {
        this.info = info;
    }

    public List<User> getAmiList() {
        return amiList;
    }

    public void setAmiList(List<User> amiList) {
        this.amiList = amiList;
    }

    public List<Message> getMessageList() {
        return messageList;
    }

    public void setMessageList(List<Message> messageList) {
        this.messageList = messageList;
    }

    public List<Message> getLikedList() {
        return likedList;
    }

    public void setLikedList(List<Message> likedList) {
        this.likedList = likedList;
    }
}
