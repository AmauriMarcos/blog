<template>
    <div>
        <h2>See the posts below:</h2>
        {{posts}}
    </div>
</template>
<script>
import axios from 'axios';

export default {

    async asyncData(){
       const response = await axios.get("http://localhost:3000/api")
       return {posts: response.data}
    }
        
}
</script>