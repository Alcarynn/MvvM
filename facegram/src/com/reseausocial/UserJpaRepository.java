package com.reseausocial;

import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;
import javax.persistence.Query;
import java.util.List;


public class UserJpaRepository {

    private EntityManager em;
    public UserJpaRepository() {
        em=EntityManagerFactorySingleton.getEntityManager();
    }

    public List<User> getAll() {
        List<User> l = em.createQuery("select u from User u").getResultList();
        return l;
    }

    public User getById(int id) {
        User u = em.find(User.class,id);
        return u;
    }


    public User add(User u) {
        EntityTransaction t = em.getTransaction();
        t.begin();
        em.persist(u);
        t.commit();
        return u;
    }


    public boolean remove(int id){
        EntityTransaction t = em.getTransaction();
        t.begin();
        User u = em.find(User.class,id);
        if (u == null) {
            return false;
        }
        else {
            em.remove(u);
        }
        t.commit();
        return true;
    }

    public boolean update(User u) {
        EntityTransaction t = em.getTransaction();
        User user = em.find(User.class,u.getId());
        t.begin();
        if (user == null) {
            return false;
        }
        else {
            em.persist(em.merge(u));
        }

        t.commit();
        return true;
    }
}
