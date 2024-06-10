
export   const FormatTitle= (title:string):string =>{
    
       title =  title.replace(/\?/g, '__qm__');
       title =  title.replace(/\'/g, '__sing_quote__');
       title =  title.replace(/\"/g, '__doub_quote__');
       title =  title.replace(/\!/g, '__exlam_mark__');


      return title
      
}


export   const ReFormatTitle= (formattedTitle:string):string =>{
    
    formattedTitle = formattedTitle.replace(/__qm__/g, '?');
    formattedTitle = formattedTitle.replace(/__sing_quote__/g, `'`);
    formattedTitle = formattedTitle.replace(/__doub_quote__/g, `"`);
    formattedTitle =  formattedTitle.replace(/\__exlam_mark__/g, '!');

     return formattedTitle
  
  
}