export  default function HelloWorld(){
    const propsUserCard = {
        nama:"Daneh",
        nim:"1234567890",
        tanggal:"2025-01-01"
    }
    return(
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJS</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
                {...propsUserCard}
                // nama="Daneh"
                // nim="1234567890"
                // tanggal={new Date().toLocaleDateString()}
            />
            <img src="img/download.jpg" alt="logo" />
        </div>
    )
}

function GreetingBinjai(){
    return (
        <small>Salam dari Binjai</small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin menjadi Maung";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}