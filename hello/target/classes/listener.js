 $('form').submit( function(){
            $("#tableId").text("");
           if( $( "select option:selected" ).val()=='title'){
                getByTitle($("#recherche").val());
           }else{
                getByPrice($("#recherche").val());
           }
           return false;
        });