 $('form').submit( function(){
            $("#tableId").text("");
            var type=$( "select option:selected" ).val();
            var param=$( "#recherche" ).val();
            if(param==="title"||param==="id"||param==="price"){
                    getBy(type,param);
             }
           return false;
        });