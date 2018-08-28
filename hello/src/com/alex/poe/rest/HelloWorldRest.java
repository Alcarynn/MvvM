package com.alex.poe.rest;

import com.alex.poe.media.Book;
import com.alex.poe.media.EntityManagerFactorySingleton;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.ws.rs.core.*;

import javax.ws.rs.*;
import java.util.List;

@Path("/hello")
public class HelloWorldRest {

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

    @GET
    @Path("/book/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Book getBook(@PathParam("id") int id) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        Book b = em.find(Book.class,id);
        return b;
    }

    @GET
    @Path("/book/price/{price}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook(@PathParam("price") double price) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        Query q= (Query) em.createQuery("select b from Book b where b.price <= :price").getResultList();
        List<Book> l=q.setParameter("price",price).getResultList();
        return l;
    }

    @GET
    @Path("/book")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getAllBook() {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        List<Book> l = em.createQuery("select b from Book b").getResultList();
        return l;
    }

    @GET
    @Path("/book/title/{title}")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Book> getBook(@PathParam("title") String title) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        Query q= (Query)em.createQuery("select b from Book b where upper(b.title) like '%:title%'");
        q.setParameter("title",title.toUpperCase());
        List<Book> l = q.getResultList();
        return l;
    }

    @PUT
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Book putBook(Book b) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        EntityTransaction t = em.getTransaction();
        t.begin();
        em.persist(b);
        t.commit();
        return b;
    }

    @POST
    @Path("/book")
    @Consumes(MediaType.APPLICATION_JSON)
    public Response postBook(Book b) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        EntityTransaction t = em.getTransaction();
        Book book = em.find(Book.class,b.getId());
        if (book == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        else {
            em.merge(b);
        }
        em.persist(b);
        t.commit();
        return Response.ok().build();
    }
//{"type":"book","authorList":[],"id":12,"price":99.0,"title":"JSON","nbPage":0}
    @POST
    @Path("/mock/book")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Book postMock(Book b){
        return b;
    }

    @DELETE
    @Path("/book/{id}")
    public Response deleteBook(@PathParam("id") int id) {
        EntityManager em = EntityManagerFactorySingleton.getEntityManager();
        EntityTransaction t = em.getTransaction();
        t.begin();
        Book b = em.find(Book.class,id);
        if (b == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        else {
            em.remove(b);
        }
        em.persist(b);
        t.commit();
        return Response.ok().build();
    }

}