import com.reseausocial.Message;
import com.reseausocial.UserJpaRepository;
import com.reseausocial.User;

import java.util.List;

public class Main {
    public static void main (String[] args){
        String messageOut="";
        System.out.println("avant");
        UserJpaRepository msgRepos=new UserJpaRepository();
        System.out.println("initialisation depot");
        List<User>userList=msgRepos.getAll();
        System.out.println("debut parcours");
        for(User u:userList){
            messageOut+="\n user:"+u.getId()+" "+u.getLogin();
            for(User a : u.getAmiList()){
                messageOut+="\t amis:"+a.getId()+" "+a.getLogin()+"\n";
            }
            for(Message m:u.getMessageList()){
                messageOut+="\t message: author: "+m.getAuthor()==null||m.getAuthor().getInfo()==null? "N/A ":m.getAuthor().getInfo().getName() +
                                   "message: "+m.getContenu()+
                                   "date: "+m.getDate()+"\n";
                for(User liker:m.getLikerList()){
                    messageOut+="\t like:"+liker.getLogin()+" as Liked"+"\n";
                }
                for(Message c:m.getCommentList()){
                    messageOut+="\t comment make by :"+c.getAuthor().getLogin()+" content:"+c.getContenu() +"\n";
                }

            }

        }
        System.out.println(messageOut);
        System.out.println("fin");
    }
}
