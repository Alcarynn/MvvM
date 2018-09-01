package com.alex.poe.media;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import javax.ws.rs.core.Response;
import java.sql.*;
import java.util.List;


public class BookJpaRepository  {

    private EntityManager em;
    public BookJpaRepository() {
        em=EntityManagerFactorySingleton.getEntityManager();
    }



    public List<Book> getAll() {
        List<Book> l = em.createQuery("select b from Book b").getResultList();
        return l;
    }


    public Book getById(int id) {
        Book b = em.find(Book.class,id);
        return b;
    }


    public List<Book> getByTitle(String title){
        Query q= (Query)em.createQuery("select b from Book b where upper(b.title) like '%:title%'");
        return q.setParameter("title",title.toUpperCase()).getResultList();

    }

    public List<Book> getAllBook(){
        Query q= (Query)em.createQuery("select b from Book b");
        return q.getResultList();

    }


    public List<Book> getByPrice(double price)  {
        Query q= (Query) em.createQuery("select b from Book b where b.price <= :price").getResultList();
        return q.setParameter("price",price).getResultList();

    }


    public List<Book> getByPublisher(String publisherName)  {
         Query q= (Query) em.createQuery("select * from Book as b where  b.publisher.name like '%:publisherName%'");
         return q.setParameter("publisherName",publisherName).getResultList();
    }


    public Book add(Book b) {
        EntityTransaction t = em.getTransaction();
        t.begin();
        em.persist(b);
        t.commit();
        return b;
    }


    public Response remove(int id){
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


    public Response update(Book b) {
        EntityTransaction t = em.getTransaction();
        Book book = em.find(Book.class,b.getId());
        if (book == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        else {
           em.persist(em.merge(b));
        }
        
        t.commit();
        return Response.ok().build();
    }
}
