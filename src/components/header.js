import React, { useState } from "react"
import { Link } from "gatsby"

export default function Header() {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="bg-transparent">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="relative flex items-center justify-between h-16 ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={() => toggleExpansion(!isExpanded)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Apri il menu</span>
              <svg
                className={`${isExpanded ? `hidden` : `block`} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
              <svg
                className={`${isExpanded ? `block` : `hidden`} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-auto"
                viewBox="0 0 533 469"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,469.000000) scale(0.100000,-0.100000)"
                  fill="currentcolor"
                  stroke="none"
                >
                  <path
                    d="M3972 4520 c-43 -10 -106 -55 -143 -101 -121 -153 -50 -378 142 -446
                                l50 -18 -3 -117 -3 -118 -440 -1 c-242 -1 -445 -1 -451 0 -6 0 -14 17 -17 37
                                -6 36 -48 107 -77 131 -83 68 -145 86 -251 71 -71 -9 -141 -55 -183 -119 -35
                                -52 -59 -143 -51 -187 37 -199 235 -309 408 -228 76 36 157 137 157 196 0 20
                                4 20 370 20 l370 0 0 -160 0 -160 -46 -12 c-53 -15 -120 -74 -149 -133 -14
                                -28 -20 -60 -20 -105 0 -58 4 -71 37 -121 21 -31 46 -63 56 -73 23 -20 122
                                -56 157 -56 35 0 134 36 157 56 10 10 35 42 56 73 33 50 37 63 37 121 0 44 -6
                                77 -19 104 -29 58 -99 120 -151 134 l-45 12 2 162 3 161 78 -2 77 -2 0 156 c0
                                139 2 156 18 161 58 19 147 72 171 103 53 68 65 100 65 186 0 47 -6 90 -13
                                105 -31 58 -67 109 -77 110 -6 0 -19 9 -29 20 -36 40 -158 60 -243 40z m193
                                -87 c22 -14 54 -44 70 -67 27 -37 30 -48 30 -121 0 -75 -2 -84 -32 -124 -57
                                -78 -140 -111 -225 -91 -27 7 -54 17 -61 24 -7 6 -22 16 -32 22 -11 6 -33 33
                                -50 60 -116 189 112 415 300 297z m-1212 -569 c21 -14 51 -46 68 -71 23 -38
                                29 -58 29 -105 0 -95 -38 -157 -124 -202 -111 -59 -234 -9 -300 121 -48 95 22
                                242 133 280 55 19 147 8 194 -23z"
                  />
                  <path
                    d="M406 3348 c-165 -60 -240 -215 -183 -379 19 -54 60 -102 119 -140 50
                                -32 57 -34 143 -34 86 0 93 2 143 34 77 49 95 74 143 199 l9 22 344 0 c263 0
                                346 -3 353 -12 5 -7 16 -32 23 -56 7 -24 31 -61 52 -82 153 -153 412 -51 421
                                165 4 116 -74 223 -179 245 -135 28 -257 -30 -295 -142 l-18 -53 -356 0 -357
                                0 -20 58 c-40 115 -145 188 -268 186 -25 0 -58 -5 -74 -11z m176 -78 c66 -34
                                86 -58 109 -130 22 -66 22 -67 4 -126 -31 -100 -110 -158 -211 -158 -70 0
                                -111 21 -167 83 -28 31 -36 49 -42 97 -13 118 20 183 120 234 70 37 117 37
                                187 0z"
                  />
                  <path
                    d="M2270 2886 c-19 -8 -48 -21 -64 -29 -35 -19 -104 -100 -114 -136 -4
                                -14 -7 -262 -7 -551 0 -434 2 -529 14 -550 32 -56 79 -102 131 -128 l55 -27
                                515 0 515 0 50 27 c69 36 120 100 135 169 16 74 10 1042 -7 1080 -18 41 -83
                                105 -133 131 l-45 23 -505 2 c-401 1 -512 -1 -540 -11z"
                  />
                  <path
                    d="M1615 2419 c-27 -11 -63 -32 -78 -47 -37 -35 -77 -113 -77 -152 l0
                                -30 -372 -2 -373 -3 -3 -302 -2 -303 -28 -5 c-47 -10 -111 -46 -149 -85 -94
                                -98 -97 -281 -6 -383 17 -20 58 -50 90 -67 52 -28 65 -31 128 -28 121 6 219
                                74 257 177 22 59 23 144 2 207 -27 81 -120 161 -207 179 l-27 5 2 268 3 267
                                345 3 345 2 25 -46 c58 -106 176 -156 295 -123 53 14 97 49 136 106 30 42 32
                                52 32 127 0 88 -7 107 -60 172 -23 29 -50 48 -89 63 -69 26 -124 26 -189 0z
                                m-742 -954 c140 -116 99 -324 -75 -379 -54 -17 -61 -17 -113 -1 -195 56 -219
                                313 -39 410 21 12 50 15 104 13 71 -3 78 -5 123 -43z"
                  />
                  <path
                    d="M4640 2434 c-14 -3 -39 -12 -57 -20 -17 -8 -35 -14 -40 -14 -29 -1
                                -113 -110 -133 -172 l-12 -38 -133 0 -133 0 -7 28 c-10 48 -60 112 -116 147
                                -47 31 -61 35 -122 35 -80 0 -129 -21 -184 -80 -66 -69 -88 -156 -59 -236 40
                                -116 133 -184 247 -184 102 0 197 73 234 180 l12 35 130 3 131 3 7 -28 c10
                                -43 60 -125 97 -159 69 -64 182 -83 284 -47 171 60 239 271 137 423 -60 88
                                -184 142 -283 124z m151 -89 c42 -21 64 -46 95 -110 29 -60 30 -106 5 -162
                                -50 -108 -156 -160 -263 -129 -71 20 -93 38 -128 99 -68 118 -18 264 105 312
                                49 18 139 14 186 -10z"
                  />
                  <path
                    d="M1659 1543 c-52 -8 -132 -66 -163 -117 -24 -39 -31 -63 -34 -117 -4
                                -59 -1 -76 22 -119 25 -48 91 -119 111 -120 6 0 27 -5 48 -11 l37 -10 0 -119
                                0 -118 -41 -7 c-79 -13 -169 -95 -197 -177 -23 -65 -16 -171 14 -229 25 -49
                                78 -100 134 -125 145 -69 315 -2 381 149 65 151 -28 342 -186 382 l-40 10 -3
                                117 -3 117 43 11 c55 15 99 49 140 108 30 43 32 52 31 128 0 76 -2 84 -36 136
                                -55 82 -162 128 -258 111z m108 -804 c67 -14 119 -62 143 -133 24 -67 25 -82
                                4 -143 -20 -61 -56 -99 -119 -129 -63 -30 -107 -30 -170 0 -99 47 -145 130
                                -130 237 13 95 102 172 207 178 9 1 39 -4 65 -10z"
                  />
                  <path
                    d="M3837 1539 c-61 -14 -110 -44 -146 -89 -77 -96 -80 -191 -10 -294 33
                                -50 71 -78 127 -94 l42 -13 0 -199 0 -200 -319 0 -320 0 -6 23 c-38 137 -130
                                216 -260 225 -181 12 -329 -150 -296 -325 22 -115 78 -186 175 -222 153 -57
                                309 12 366 163 l25 66 346 0 c307 0 348 2 353 16 3 9 6 114 6 234 l0 219 43
                                13 c104 30 187 152 173 254 -20 147 -164 255 -299 223z m-825 -722 c68 -24
                                119 -95 134 -184 12 -80 -63 -202 -139 -224 -43 -12 -129 -11 -164 2 -15 5
                                -47 29 -70 51 -50 49 -69 111 -58 195 6 46 14 63 48 100 22 24 55 51 71 58 40
                                17 131 18 178 2z"
                  />
                </g>
              </svg>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to="/">
                  <div className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </div>
                </Link>
                <Link to="/post/">
                  <div className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Post
                  </div>
                </Link>
                <Link to="/projects/">
                  <div className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Progetti
                  </div>
                </Link>
                {/* <Link to="/contact/" >
                                    <div className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contatti</div>
                                </Link> */}
                <Link to="/about/">
                  <div className="text-gray-700 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    About
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${isExpanded ? `block` : `hidden`}`}>
        <div className="grid sm:hidden grid-cols-2 text-center text-gray-700 border-b">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/">
              <div className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </div>
            </Link>
            <Link to="/post/">
              <div className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Post
              </div>
            </Link>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/projects/">
              <div className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Progetti
              </div>
            </Link>
            <Link to="/about/">
              <div className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
