package com.reseausocial;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="message")
public class Message {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int id;
    @Column(name="contenu")
    private String contenu;

    @ManyToOne(fetch=FetchType.LAZY )
    @JoinColumn(name = "authorId")
    private User author;

    @Column(name="date")
    private Date date;

    @ManyToMany(mappedBy="likedList")
    private List<User> likerList=new ArrayList<>();

    @OneToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name="comments",
            joinColumns=@JoinColumn(name="msgid"),
            inverseJoinColumns=@JoinColumn(name="comid")
    )
    private List<Message> commentList=new ArrayList<>();
    Message(){

    }
    Message(int id,User author,String contenu){
        this.id=id;
        this.author=author;
        this.date=date;
        this.contenu=contenu;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public User getAuthor() {
        return author;
    }

    public void setAuthor(User author) {
        this.author = author;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<User> getLikerList() {
        return likerList;
    }

    public void setLikerList(List<User> likerList) {
        this.likerList = likerList;
    }

    public List<Message> getCommentList() {
        return commentList;
    }

    public void setCommentList(List<Message> commentList) {
        this.commentList = commentList;
    }
}
