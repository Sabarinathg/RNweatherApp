import { StyleSheet } from "react-native";

export const styles=StyleSheet.create
({
    container: {
        flex: 1,
        backgroundColor: '#2e2e2e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop:40
      },
      weatherContainer:
      {
        flex:1,
        backgroundColor:'#2e2e2e',
        alignItems: 'center',
        justifyContent:'center',
        width:'100%',
        padding:8,
        paddingBottom:0,
        paddingTop:0
      },
      searchContainer:{
        flex:3,
        backgroundColor:'#2e2e2e',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:2
      },
      inputContainer:
      {
        width:'95%',
          flexDirection:'row',
          backgroundColor:'#434343',
          justifyContent:'space-between',
          overflow:'hidden',
          borderRadius:20,
      },
      inputField:
      {
          width:'75%',
          marginLeft:15,
          color:'#fff',
          outlineStyle:'none'
      },
      inputBtn:
      {
          backgroundColor:'#ce6b34',
          padding:10,
          color:'#fbfbfb'
      },
      weatherResult:
      {
        flex:10,
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        backgroundColor:'#1f1f1f',
        alignItems:'center',
        overflow:'hidden'
      },
      backgroundImage:
      {
        width:'100%',
        height:'100%',
        
        
      },
      line:
      {
        width:'100%',
        height:1,
        backgroundColor:'#fff',
        marginVertical:10
      },
      weatherReportContainer:
      {
        padding:20
      },
      weatherTemp:
      {
        fontSize:80,
        color:'white',
        fontWeight:'700',
      },
      textStyle:
      {
        fontSize:18,
        fontWeight:'700',
        color:'white'
      },
      maxAndmin:
      {
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        flexDirection:'row',
        width:'60%',
        padding:5,
        borderRadius:25,
        height:50,
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:'white',
        borderWidth:1,
        marginVertical:10
      },
      weatherDetails:
      {
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        flexDirection:'row',
        padding:10,
        borderRadius:25,
        height:100,
        alignItems:'center',
        justifyContent:'space-around',
        borderColor:'white',
        borderWidth:1,
        marginVertical:10
      },
      wDetails:
      {
        color:'white',
        fontSize:14,
        fontWeight:'500',
        textAlign:'center'
      },
      seperator:
      {
        width:1,
        height:'75%',
        backgroundColor:'white'
      },
      forecastContainer:
      {
        flex:2,
        flexDirection:'row',
        paddingVertical:15,
        paddingHorizontal:10,
        overflow:'scroll',
        backgroundColor:'rgba(255, 255, 255, 0.3)',
        flexDirection:'row',
        margin:20,
        borderRadius:25,
        height:100,
        borderColor:'white',
        borderWidth:1,
        marginVertical:10
      },
      card:
      {
        marginHorizontal:5,
        alignItems:'center'
      },
      fdet:
      {
        color:'white',
        fontWeight:'700'
      }


})