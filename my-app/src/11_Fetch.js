import { Component } from "react";
/* 
    Fetch?
    자바스크립트 내장함수로, 비동기통신을 구현할때 사용함
    * 비동기통신 -> 먼저 시작한 작업의 완료 여부와 상관 없이 다음 작업을 실행하는 것

    fetch함수를 이용하여 get / post방식으로 url호출하여 데이터를 가져옴

*/

class FetchGet extends Component {

    componentDidMount = async () => {

        const response = await fetch("http://date.jsontest.com?a=1");
        /*
            async ~ await : 비동기 함수를 동기적으로 처리해야할때 함수 선언 위치에 async, 동기적으로 처리할 코드에 await을 붙이면 된다.
        */
        // Get방식 요청은 별도의 메소드를 사용하지 않고 url뒤에 내가 전달하고자 하는 값을 붙여서 전송함
        console.log(response);
        /*
            async ~ await을 붙인 이유?
            fetch함수같은 경우 비동기적으로 작동하기 때문에 url을 호출하고 데이터를 가져오기 전에 아래 코드 response.json()메소드가 실행되는
            경우 에러가 발생할 수 있다. 따라서 데이터를 전부 다 가져온 후에 아래 json()메소드가 호출되도록 동기적 흐름을 만들었다
            
        */

        const body = await response.json();
        alert(body.date);
    }

    render() {
        return(
            <h1>fetch get</h1>
        )
    }
}

class FetchPost extends Component {

    componentDidMount = async () => {

        /* fetch의 첫 번째 파라미터에 url정보, 두 번째 파라미터에 post요청 시 필요한 정보를 추가 */
        const response = await fetch("http://date.jsontest.com", {
            method : 'POST',
            headers : {
                'Content-type' : 'application/json'
                // json형태의 데이터를 사용하기 위한 설정(form태그 안의 enc-type과 같은 속성)
            },
            body : { // json형태의 데이터 선언
                a : "test",
                b : "test2"
                // 전달할 데이터 body영역 안에 담아서 전달
            }
        })
        const body = await response.json();
        alert(body.time);
    }

    render() {
        return(
            <h1>fetch Post</h1>
        )
    }
}
export {FetchGet, FetchPost};