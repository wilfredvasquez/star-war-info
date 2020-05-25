const getIdMixin = {
    methods: {
      getId (url) {
        const length = url.toString().split("/").length
        return url.toString().split("/")[length-2]
      }
    }
  }
  
  export default getIdMixin