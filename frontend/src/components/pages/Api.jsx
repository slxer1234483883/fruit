import api from "./Apiconfig";
const faqsService={
    async getFaqs(){
        try{
        const response = await api.get('/faqs/');
    return response;    
    }catch(err){
        return err;
    }

    }
}
export default faqsService;