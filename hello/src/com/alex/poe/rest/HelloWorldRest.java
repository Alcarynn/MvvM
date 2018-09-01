package com.alex.poe.rest;

import com.alex.poe.media.Book;
import com.alex.poe.media.BookJpaRepository;

import javax.ws.rs.core.*;

import javax.ws.rs.*;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Path("/hello")
public class HelloWorldRest {


    private BookJpaRepository bookRepository=null;// new BookJpaRepository();



    @GET
    @Path("/world")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello() {
        return "Hello World!";
    }


    @GET
    @Path("/param/{s}")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello(@PathParam("s") String s) {
        return "Hello "+s;
    }

    @GET
    @Path("/mock/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getMock(@PathParam("id") int id) {
        Book b = new Book();
        b.setTitle("JSON");
        b.setId(id);
        b.setPrice(99);
        return b;
    }
    //{"type":"book","authorList":[],"id":12,"price":99.0,"title":"JSON","nbPage":0}
    @GET
    @Path("/mock/book")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getAllMockBook() {
        List<Book> bookList=new ArrayList<>();
        int i=0;
        for(i=0;i<10;i++){
            bookList.add(new Book(i,"livre"+i,10+1));

        }
        return bookList;
    }

    @GET
    @Path("/mock/book/title/{title}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getMock(@PathParam("title") String title) {
        List<Book> bookList=new ArrayList<>();
        int i=0;
        for(i=0;i<10;i++){
            bookList.add(new Book(i,title,10.0));
        }
        return bookList;
    }

    @GET
    @Path("/mock/book/price/{price}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getMock(@PathParam("price") double price) {
        List<Book> bookList=new ArrayList<>();
        int i=0;
        for(i=0;i<10;i++){
            bookList.add(new Book(i,"livre "+i,price));
        }
        return bookList;
    }

    @POST
    @Path("/mock/book")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Book postMock(Book b){
        return b;
    }

    @GET
    @Path("/book/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getBook(@PathParam("id") int id) throws SQLException {

        return bookRepository.getById(id);
    }

    @GET
    @Path("/book/price/{price}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook(@PathParam("price") double price) {
        return bookRepository.getByPrice(price);
    }

    @GET
    @Path("/book")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getAllBook() {
        return bookRepository.getAllBook();
    }



    @GET
    @Path("/book/title/{title}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook(@PathParam("title") String title) {
        return bookRepository.getByTitle(title);
    }

    @PUT
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Book putBook(Book b) {
       return bookRepository.add(b);
    }

    @POST
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response postBook(Book b) {
        return bookRepository.update(b);
    }

    @DELETE
    @Path("/book/{id}")
    public Response deleteBook(@PathParam("id") int id) {
        return bookRepository.remove(id);
    }

}