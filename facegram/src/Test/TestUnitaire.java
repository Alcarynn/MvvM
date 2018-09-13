package Test;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;


import com.reseausocial.User;
import org.junit.Test;

import java.sql.SQLException;
import com.reseausocial.UserJpaRepository;

public class TestUnitaire{
    UserJpaRepository usrRep= new UserJpaRepository();
    @Test
    public void jpaRepository(){

        assertNotNull(usrRep);

    }
    @Test
    public void jpaUsrId(){

        assertNotNull(usrRep.getById(1));
        assertEquals(usrRep.getById(1),"gheraibia@hotmail.com");
        assertNotNull(usrRep);

    }

    @Test
    public void jpaUsrAll(){

        assertNotNull(usrRep.getAll());
        assertNotNull(usrRep);

    }

    @Test
    public void jpaUsrByLogin(){
        String login="gheraibia@hotmail.com";
        User test=usrRep.getUsrByLogin(login);
        assertNotNull(test);
        assertEquals(test.getId(),1);
    }



}