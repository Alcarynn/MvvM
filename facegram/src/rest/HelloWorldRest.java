package rest;



import com.reseausocial.User;
import com.reseausocial.UserJpaRepository;

import javax.ws.rs.core.*;

import javax.ws.rs.*;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Path("/hello")
public class HelloWorldRest {


    private UserJpaRepository userRepository=new UserJpaRepository();


    @GET
    @Path("/world")
    @Produces(MediaType.TEXT_PLAIN)
    public String getHello() {
        return "Hello World!";
    }


    @GET
    @Path("/user/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public User getUser(@PathParam("id") int id) throws SQLException {

        return userRepository.getById(id);
    }


    @GET
    @Path("/user")
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getAllBook() {
        return userRepository.getAll();
    }

    @POST
    @Path("/user")
    @Consumes(MediaType.APPLICATION_JSON)
    public User putBook(User u) {
       return userRepository.add(u);
    }

    @PUT
    @Path("/user")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response postBook(User u) {
        if(!userRepository.update(u)) {

            return Response.status(Response.Status.NOT_FOUND).build();
        }

        return Response.ok().build();
    }

    @DELETE
    @Path("/user/{id}")
    public Response deleteBook(@PathParam("id") int id) {
        if(userRepository.remove(id)) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }

        return Response.ok().build();
    }

}