import React from "react"

export default function Tools(){
    return(
        <div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <div className="bg-white rounded-xl shadow-sm">
                    <h1 className="text-center text-xl font-semibold m-5">IDE</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#007ACC" className="w-2/3 p-4 place-self-center">
                            <title>Visual Studio Code icon</title>
                            <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"/>
                        </svg>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3DDC84" className="w-2/3 p-4 place-self-center">
                            <title>Android Studio icon</title>
                            <path d="M12 0C6.07 0 1.254 4.816 1.254 10.746c0 3.29 1.482 6.237 3.814 8.21l4.51-7.8-.393-.39c-.115-.115-.173-.213-.175-.303a.239.239 0 010-.03H9V7.876c0-.615.51-1.123 1.125-1.123h.635V4.738h2.49v2.014h.625c.625 0 1.125.508 1.135 1.133v2.539H15v.01h-.002c-.003.087-.051.2-.174.322l-.01.01-.39.39 1.933 3.342a5.755 5.755 0 001.397-3.752h2.004a7.75 7.75 0 01-2.356 5.561l1.53 2.65a10.727 10.727 0 003.814-8.21C22.756 4.806 17.94 0 12 0zm6.932 18.957a10.791 10.791 0 01-1.653 1.15l1.52 2.628a.569.569 0 00.197.205l1.504 1.025c.059.04.127.04.185.01a.192.192 0 00.088-.166l-.156-1.806a.691.691 0 00-.088-.274l-1.597-2.771zm-1.653 1.15l-1.498-2.589a7.693 7.693 0 01-3.771.986 7.693 7.693 0 01-3.772-.986l-1.5 2.598A10.686 10.686 0 0012 21.495c1.918 0 3.72-.505 5.28-1.387zm-10.54.009a10.788 10.788 0 01-1.67-1.16L3.47 21.719a.694.694 0 00-.088.274l-.137 1.816c-.01.069.03.127.088.166.059.04.127.03.185-.01l1.504-1.015a.777.777 0 00.196-.205zm5.26-12.387v.02a1.49 1.49 0 00-1.493 1.5A1.501 1.501 0 0012 10.745h.01a1.508 1.508 0 001.494-1.498 1.51 1.51 0 00-1.494-1.5zm-.946 4.904L9.234 15.78a5.707 5.707 0 002.766.713 5.635 5.635 0 002.756-.704l-1.815-3.15-.375.375a.76.76 0 01-.556.234h-.02a.793.793 0 01-.556-.234z"/>
                        </svg>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5C2D91" className="w-2/3 p-4 place-self-center">
                            <title>Visual Studio icon</title>
                            <path d="M17.583.063a1.5 1.5 0 00-1.032.392 1.5 1.5 0 00-.001 0A.88.88 0 0016.5.5L8.528 9.316 3.875 5.5l-.407-.35a1 1 0 00-1.024-.154 1 1 0 00-.012.005l-1.817.75a1 1 0 00-.077.036 1 1 0 00-.047.028 1 1 0 00-.038.022 1 1 0 00-.048.034 1 1 0 00-.03.024 1 1 0 00-.044.036 1 1 0 00-.036.033 1 1 0 00-.032.035 1 1 0 00-.033.038 1 1 0 00-.035.044 1 1 0 00-.024.034 1 1 0 00-.032.05 1 1 0 00-.02.035 1 1 0 00-.024.05 1 1 0 00-.02.045 1 1 0 00-.016.044 1 1 0 00-.016.047 1 1 0 00-.015.055 1 1 0 00-.01.04 1 1 0 00-.008.054 1 1 0 00-.006.05A1 1 0 000 6.668v10.666a1 1 0 00.615.917l1.817.764a1 1 0 001.035-.164l.408-.35 4.653-3.815 7.973 8.815a1.5 1.5 0 00.072.065 1.5 1.5 0 00.057.05 1.5 1.5 0 00.058.042 1.5 1.5 0 00.063.044 1.5 1.5 0 00.065.038 1.5 1.5 0 00.065.036 1.5 1.5 0 00.068.031 1.5 1.5 0 00.07.03 1.5 1.5 0 00.073.025 1.5 1.5 0 00.066.02 1.5 1.5 0 00.08.02 1.5 1.5 0 00.068.014 1.5 1.5 0 00.075.01 1.5 1.5 0 00.075.008 1.5 1.5 0 00.073.003 1.5 1.5 0 00.077 0 1.5 1.5 0 00.078-.005 1.5 1.5 0 00.067-.007 1.5 1.5 0 00.087-.015 1.5 1.5 0 00.06-.012 1.5 1.5 0 00.08-.022 1.5 1.5 0 00.068-.02 1.5 1.5 0 00.07-.028 1.5 1.5 0 00.09-.037l4.944-2.377a1.5 1.5 0 00.476-.362 1.5 1.5 0 00.09-.112 1.5 1.5 0 00.004-.007 1.5 1.5 0 00.08-.125 1.5 1.5 0 00.062-.12 1.5 1.5 0 00.009-.017 1.5 1.5 0 00.04-.108 1.5 1.5 0 00.015-.037 1.5 1.5 0 00.03-.107 1.5 1.5 0 00.009-.037 1.5 1.5 0 00.017-.1 1.5 1.5 0 00.008-.05 1.5 1.5 0 00.006-.09 1.5 1.5 0 00.004-.08V3.942a1.5 1.5 0 000-.003 1.5 1.5 0 000-.032 1.5 1.5 0 00-.01-.15 1.5 1.5 0 00-.84-1.17L18.206.21a1.5 1.5 0 00-.622-.146zM18 6.92v10.163l-6.198-5.08zM3 8.574l3.099 3.427-3.1 3.426z"/>
                        </svg>
                        {/* Cercare svg thonny, geany, codeblocks */}
                    </div>
                    

                </div>
                <div className="bg-white rounded-xl shadow-sm">
                    <h1 className="text-center text-xl font-semibold m-5">Framework</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#663399" className="w-2/3 p-4 place-self-center">
                            <title>Gatsby icon</title>
                            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 2.571c3.171 0 5.915 1.543 7.629 3.858l-1.286 1.115C16.886 5.572 14.571 4.286 12 4.286c-3.343 0-6.171 2.143-7.286 5.143l9.857 9.857c2.486-.857 4.373-3 4.973-5.572h-4.115V12h6c0 4.457-3.172 8.228-7.372 9.17L2.83 9.944C3.772 5.743 7.543 2.57 12 2.57zm-9.429 9.6l9.344 9.258c-2.4-.086-4.801-.943-6.601-2.743-1.8-1.8-2.743-4.201-2.743-6.515z"/>
                        </svg>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#61DAFB" className="w-2/3 p-4 place-self-center">
                            <title>React icon</title>
                            <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/>
                        </svg>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#02569B" className="w-2/3 p-4 place-self-center">
                            <title>Flutter icon</title>
                            <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"/>
                        </svg>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#339933" className="w-2/3 p-4 place-self-center">
                            <title>Node.js icon</title>
                            <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"/>
                        </svg>
                        {/* MingW */}
                    </div>

                </div>
                <div className="bg-white rounded-xl shadow-sm">
                    <h1 className="text-center text-xl font-semibold m-5">Sistemi Operativi</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3DDC84" className="w-2/3 p-4 place-self-center">
                            <title>Android icon</title>
                            <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"/>
                        </svg>
                        <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentcolor" className="w-2/3 p-4 place-self-center">
                            <title>iOS icon</title>
                            <path d="M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"/>
                        </svg>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#0078D6" className="w-2/3 p-4 place-self-center">
                            <title>Windows icon</title>
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                        </svg>
                    </div>

                </div>
                <div className="bg-white rounded-xl shadow-sm">
                    <h1 className="text-center text-xl font-semibold m-5">Board</h1>
                    <div className="grid grid-cols-2 gap-3">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00979D" className="w-2/3 p-4 place-self-center">
                            <title>Arduino icon</title>
                            <path d="M23.82 12a5.78 5.78 0 0 0-5.88-5.67c-.29 0-.6.02-.9.05-2.52.37-4.2 2.18-5.13 3.57-.95-1.39-2.64-3.2-5.14-3.57-.3-.03-.6-.05-.9-.05A5.78 5.78 0 0 0 0 12a5.78 5.78 0 0 0 5.87 5.67c.3 0 .6-.02.92-.06 2.52-.36 4.2-2.17 5.14-3.56.95 1.39 2.63 3.2 5.14 3.57.31.03.6.05.91.05A5.78 5.78 0 0 0 23.82 12zM6.48 15.6c-.2.04-.43.04-.63.04A3.77 3.77 0 0 1 2 11.98a3.78 3.78 0 0 1 3.86-3.66c.2 0 .42.02.63.04 2.37.35 3.82 2.67 4.31 3.62-.5.95-1.95 3.3-4.31 3.62zM13 12c.49-.93 1.94-3.27 4.31-3.62.2-.04.42-.04.62-.04A3.76 3.76 0 0 1 21.8 12a3.78 3.78 0 0 1-3.86 3.66c-.2 0-.42-.02-.62-.04-2.36-.35-3.82-2.69-4.31-3.62zm-8.79.59h3.54v-1.16H4.22v1.16zm14.13 0h1.19v-1.16h-1.2v-1.19H17.2v1.2H16v1.15h1.2v1.18h1.15V12.6zM24 7.06c0 .3-.22.51-.53.51a.51.51 0 0 1-.53-.5c0-.28.24-.52.53-.52.31 0 .53.22.53.51zm-.91 0c0 .22.16.4.4.4.22 0 .38-.18.38-.4s-.16-.4-.38-.4c-.24-.02-.4.16-.4.4zm.3.26h-.1V6.8l.2-.01c.09 0 .14.01.18.03.04.02.06.06.06.11 0 .06-.04.1-.11.11.05.02.07.06.09.13l.03.13h-.12c-.02-.02-.02-.07-.04-.13-.02-.05-.04-.07-.11-.07h-.05l-.02.22zm.02-.3h.06c.07 0 .1-.01.1-.07 0-.05-.03-.07-.1-.07h-.07v.14h.01z"/>
                        </svg>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#C51A4A" className="w-2/3 p-4 place-self-center">
                            <title>Raspberry Pi icon</title>
                            <path d="M16.111 17.338c-.857.989-1.334 2.79-.709 3.371.596.449 2.201.391 3.385-1.23.86-1.08.569-2.893.081-3.372-.73-.555-1.778.164-2.757 1.243v-.012zm-8.057.3c-.908-1.04-2.088-1.658-2.851-1.199-.51.382-.605 1.685.123 2.967 1.078 1.524 2.596 1.679 3.221 1.307.659-.488.3-2.137-.493-3.075zm4.105 3.145c-1.103-.026-2.798.439-2.776 1.032-.018.403 1.331 1.572 2.705 1.513 1.326.03 2.699-1.139 2.682-1.649-.004-.523-1.498-.927-2.607-.884l-.004-.012zm-.075-13.944c-1.275-.032-2.502.933-2.502 1.493-.004.68 1.008 1.376 2.51 1.394 1.543.01 2.518-.559 2.532-1.26.016-.794-1.394-1.639-2.518-1.627h-.022zm-3.071.532c-2.135-.345-3.913.9-3.842 3.192.07.884 4.63-3.041 3.843-3.177l-.001-.015zm9.749 3.251c.071-2.277-1.709-3.521-3.844-3.176-.787.135 3.772 4.061 3.844 3.176zm.364.824c-1.239-.329-.42 5.049.588 4.615 1.109-.869 1.466-3.446-.588-4.6v-.015zM4.228 16.121c1.007.45 1.827-4.929.589-4.6-2.053 1.153-1.698 3.73-.589 4.615v-.015zm9.415-5.948c-1.146.75-1.354 2.428-.461 3.746.891 1.318 2.543 1.813 3.691 1.078 1.146-.733 1.353-2.412.462-3.746-.892-1.333-2.545-1.813-3.692-1.063v-.015zm-3.096.135c-1.146-.734-2.799-.254-3.689 1.064-.892 1.334-.686 3.012.461 3.761s2.799.269 3.691-1.064c.885-1.318.675-2.997-.465-3.745l.002-.016zm4.369 7.162c-.009-1.393-1.252-2.518-2.781-2.502-1.527.016-2.761 1.139-2.754 2.532v.029c.01 1.394 1.254 2.517 2.783 2.502 1.527 0 2.756-1.138 2.742-2.517v-.029l.01-.015zm3.209-15.133c-2.307 1.184-3.652 2.128-4.389 2.938.377 1.498 2.344 1.558 3.063 1.512-.147-.06-.271-.149-.315-.269.18-.12.821-.016 1.268-.255-.171-.03-.252-.061-.329-.195.419-.135.875-.24 1.141-.465-.143 0-.278.03-.467-.09.377-.194.778-.359 1.095-.658-.196 0-.406 0-.466-.075.346-.21.635-.435.877-.704-.272.045-.39.016-.454-.03.261-.255.593-.479.749-.81-.203.076-.391.09-.522 0 .091-.194.47-.314.69-.779-.215.03-.441.046-.486 0 .098-.389.269-.613.435-.854-.457 0-1.15 0-1.117-.029l.283-.285c-.448-.12-.904.015-1.236.12-.149-.105 0-.255.185-.405-.39.061-.733.135-1.034.256-.164-.15.105-.285.24-.436-.599.12-.839.27-1.094.42-.18-.165-.015-.314.104-.449-.449.164-.674.374-.914.568-.09-.104-.209-.179-.06-.449-.314.18-.554.39-.734.629-.194-.134-.119-.299-.119-.449-.33.27-.54.54-.794.811-.061-.031-.105-.15-.135-.346-.779.75-1.889 2.623-.285 3.356 1.349-1.094 2.981-1.903 4.779-2.503l.041-.075zm-12.259 0c1.798.6 3.419 1.408 4.777 2.518 1.596-.75.493-2.623-.282-3.356-.041.194-.085.329-.135.359-.255-.27-.462-.54-.788-.81 0 .15.077.33-.117.45-.175-.239-.41-.45-.725-.63.149.256.025.33-.056.449-.24-.225-.465-.434-.899-.599.12.149.3.3.12.465-.239-.149-.494-.3-1.078-.42.135.149.404.3.238.45-.315-.122-.66-.212-1.035-.258.181.15.342.289.192.405-.345-.12-.806-.255-1.255-.135l.284.284c.03.037-.659.03-1.121.035.165.225.337.449.435.854-.045.045-.27.016-.483 0 .225.449.599.57.688.765-.135.096-.314.075-.523 0 .164.314.494.539.748.81-.074.044-.18.074-.464.037.239.26.524.494.869.704-.06.07-.271.069-.479.075.314.304.719.464 1.094.663-.195.136-.33.105-.465.105.255.225.72.329 1.139.464-.09.135-.164.165-.344.195.449.254 1.078.135 1.258.27-.045.119-.164.209-.314.27.719.045 2.697-.015 3.072-1.514-.736-.807-2.084-1.752-4.391-2.921l.04.016zM7.6.103c.236-.007.436.135.652.201.529-.17.65.063.91.159.577-.12.752.141 1.029.419l.322-.009c.869.507 1.305 1.536 1.457 2.065.152-.529.584-1.559 1.457-2.065l.321.007c.277-.283.453-.539 1.029-.418.261-.105.38-.33.911-.166.33-.104.62-.375 1.057-.045.368-.149.726-.195 1.045.09.495-.06.653.061.774.21.108 0 .809-.104 1.132.36.81-.09 1.064.464.774.988.165.255.337.494-.05.975.15.269.062.553-.27.913.091.374-.074.63-.374.839.06.51-.48.81-.629.914-.061.3-.181.584-.795.734-.089.449-.464.523-.824.614 1.185.675 2.188 1.558 2.188 3.731l.181.299c1.349.809 2.562 3.402.674 5.514-.119.659-.329 1.124-.511 1.648-.269 2.113-2.082 3.101-2.561 3.221-.689.525-1.438 1.02-2.442 1.363-.942.961-1.976 1.336-2.994 1.336h-.092c-1.033 0-2.063-.375-3.012-1.335-1.007-.344-1.754-.838-2.447-1.363-.479-.12-2.283-1.107-2.562-3.221-.187-.524-.394-1.004-.518-1.662-1.894-2.113-.681-4.705.666-5.515l.172-.3c0-2.172 1.005-3.057 2.188-3.73-.359-.09-.72-.165-.823-.615-.615-.15-.735-.434-.795-.734-.15-.105-.689-.404-.629-.928-.3-.211-.465-.465-.375-.854-.314-.346-.404-.645-.27-.915-.39-.479-.209-.733-.045-.974C3.236 1.329 3.491.76 4.3.85 4.614.385 5.32.491 5.423.491c.121-.15.285-.285.779-.225.314-.285.675-.24 1.049-.102.151-.12.286-.164.406-.164L7.6.103z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}