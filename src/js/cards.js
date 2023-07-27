export const cards = [
  {
    html: `<div class="container">
    <input hidden="" id="check" name="check" type="checkbox" />
    <label class="toggle" for="check">
      <div class="toggle__circle"></div>
    </label>
    <div class="toggle-text">
      <span>N</span>
      <span>F</span>
    </div>
  </div>`,
    css: `.container {
    margin: auto;
    color: hsl(0, 0%, 30%);
    font-weight: 900;
    font-size: 6rem;
    display: flex;
  }

  .toggle {
    width: 60px;
    height: 155px;
    background-color: hsl(0, 0%, 80%);
    border-radius: 1.7rem;
    padding: 0.25rem 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: background-color 300ms 300ms;
  }

  .toggle__circle {
    width: 50px;
    height: 50px;
    background-color: hsl(0, 0%, 95%);
    border-radius: 50%;
    margin-top: calc(155px - (0.25rem * 2) - 50px);
    transition: margin 500ms ease-in-out;
  }

  .toggle-text {
    display: flex;
    flex-direction: column;
    line-height: 0.8;
  }

  #check:checked + .toggle > .toggle__circle {
    margin-top: 0;
  }

  #check:checked + .toggle {
    background-color: #41a63c;
  }`, type: "button"
  },
  {
    html: `<ul class="wrapper">
        <li class="icon facebook">
            <span class="tooltip">Facebook</span>
            <span><i class="fab fa-facebook-f"></i></span>
        </li>
        <li class="icon twitter">
            <span class="tooltip">Twitter</span>
            <span><i class="fab fa-twitter"></i></span>
        </li>
        <li class="icon instagram">
            <span class="tooltip">Instagram</span>
            <span><i class="fab fa-instagram"></i></span>
        </li>
    </ul>`,
    css: `.wrapper {
        display: inline-flex;
        list-style: none;
        height: 120px;
        width: 100%;
        padding-top: 40px;
        font-family: "Poppins", sans-serif;
        justify-content: center;
      }
      
      .wrapper .icon {
        position: relative;
        background: #fff;
        border-radius: 50%;
        margin: 10px;
        width: 50px;
        height: 50px;
        font-size: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .wrapper .tooltip {
        position: absolute;
        top: 0;
        font-size: 14px;
        background: #fff;
        color: #fff;
        padding: 5px 8px;
        border-radius: 5px;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
        opacity: 0;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .wrapper .tooltip::before {
        position: absolute;
        content: "";
        height: 8px;
        width: 8px;
        background: #fff;
        bottom: -3px;
        left: 50%;
        transform: translate(-50%) rotate(45deg);
        transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
      }
      
      .wrapper .icon:hover .tooltip {
        top: -45px;
        opacity: 1;
        visibility: visible;
        pointer-events: auto;
      }
      
      .wrapper .icon:hover span,
      .wrapper .icon:hover .tooltip {
        text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
      }
      
      .wrapper .facebook:hover,
      .wrapper .facebook:hover .tooltip,
      .wrapper .facebook:hover .tooltip::before {
        background: #1877F2;
        color: #fff;
      }
      
      .wrapper .twitter:hover,
      .wrapper .twitter:hover .tooltip,
      .wrapper .twitter:hover .tooltip::before {
        background: #1DA1F2;
        color: #fff;
      }
      
      .wrapper .instagram:hover,
      .wrapper .instagram:hover .tooltip,
      .wrapper .instagram:hover .tooltip::before {
        background: #E4405F;
        color: #fff;
      }`,
    type: "button"
  },
  {
    html: `<button class="cta">
        <span>Hover me</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>`,
    css: `.cta {
        position: relative;
        margin: auto;
        padding: 12px 18px;
        transition: all 0.2s ease;
        border: none;
        background: none;
       }
       
       .cta:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 50px;
        background: #b1dae7;
        width: 45px;
        height: 45px;
        transition: all 0.3s ease;
       }
       
       .cta span {
        position: relative;
        font-family: "Ubuntu", sans-serif;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.05em;
        color: #234567;
       }
       
       .cta svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: #234567;
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
       }
       
       .cta:hover:before {
        width: 100%;
        background: #b1dae7;
       }
       
       .cta:hover svg {
        transform: translateX(0);
       }
       
       .cta:active {
        transform: scale(0.95);
       }`,
    type: "button"
  }, {
    html: `<div class="loader">
    <div class="cell d-0"></div>
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
  
    <div class="cell d-1"></div>
    <div class="cell d-2"></div>
    
    
    <div class="cell d-2"></div>
    <div class="cell d-3"></div>
    
    
    <div class="cell d-3"></div>
    <div class="cell d-4"></div>
    
    
  </div>`,
    css: `.loader {
    --cell-size: 52px;
    --cell-spacing: 1px;
    --cells: 3;
    --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
    display: flex;
    flex-wrap: wrap;
    width: var(--total-size);
    height: var(--total-size);
  }
  
  .cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 4px;
    animation: 1.5s ripple ease infinite;
  }
  
  .cell.d-1 {
    animation-delay: 100ms;
  }
  
  .cell.d-2 {
    animation-delay: 200ms;
  }
  
  .cell.d-3 {
    animation-delay: 300ms;
  }
  
  .cell.d-4 {
    animation-delay: 400ms;
  }
  
  .cell:nth-child(1) {
    --cell-color: #00FF87;
  }
  
  .cell:nth-child(2) {
    --cell-color: #0CFD95;
  }
  
  .cell:nth-child(3) {
    --cell-color: #17FBA2;
  }
  
  .cell:nth-child(4) {
    --cell-color: #23F9B2;
  }
  
  .cell:nth-child(5) {
    --cell-color: #30F7C3;
  }
  
  .cell:nth-child(6) {
    --cell-color: #3DF5D4;
  }
  
  .cell:nth-child(7) {
    --cell-color: #45F4DE;
  }
  
  .cell:nth-child(8) {
    --cell-color: #53F1F0;
  }
  
  .cell:nth-child(9) {
    --cell-color: #60EFFF;
  }
  
  /*Animation*/
  @keyframes ripple {
    0% {
      background-color: transparent;
    }
  
    30% {
      background-color: var(--cell-color);
    }
  
    60% {
      background-color: transparent;
    }
  
    100% {
      background-color: transparent;
    }
  }`
    ,
    type: "loader"
  },
  {
    html: `<div class="spinner">
        <div class="spinner1"></div>
    </div>`,
    css: `.spinner {
        background-image: linear-gradient(rgb(186, 66, 255) 35%,rgb(0, 225, 255));
        width: 100px;
        height: 100px;
        animation: spinning82341 1.7s linear infinite;
        text-align: center;
        border-radius: 50px;
        filter: blur(1px);
        box-shadow: 0px -5px 20px 0px rgb(186, 66, 255), 0px 5px 20px 0px rgb(0, 225, 255);
      }
      
      .spinner1 {
        background-color: rgb(36, 36, 36);
        width: 100px;
        height: 100px;
        border-radius: 50px;
        filter: blur(10px);
      }
      
      @keyframes spinning82341 {
        to {
          transform: rotate(360deg);
        }
      }`
    ,
    type: "loader"
  },
  {
    html: `<svg class="pl" width="240" height="240" viewBox="0 0 240 240">
        <circle class="pl__ring pl__ring--a" cx="120" cy="120" r="105" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 660" stroke-dashoffset="-330" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--b" cx="120" cy="120" r="35" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 220" stroke-dashoffset="-110" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--c" cx="85" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
        <circle class="pl__ring pl__ring--d" cx="155" cy="120" r="70" fill="none" stroke="#000" stroke-width="20" stroke-dasharray="0 440" stroke-linecap="round"></circle>
    </svg>`,
    css: `
    .pl {
        width: 6em;
        height: 6em;
      }
      
      .pl__ring {
        animation: ringA 2s linear infinite;
      }
      
      .pl__ring--a {
        stroke: #f42f25;
      }
      
      .pl__ring--b {
        animation-name: ringB;
        stroke: #f49725;
      }
      
      .pl__ring--c {
        animation-name: ringC;
        stroke: #255ff4;
      }
      
      .pl__ring--d {
        animation-name: ringD;
        stroke: #f42582;
      }
      
      /* Animations */
      @keyframes ringA {
        from, 4% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }
      
        12% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -335;
        }
      
        32% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -595;
        }
      
        40%, 54% {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -660;
        }
      
        62% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -665;
        }
      
        82% {
          stroke-dasharray: 60 600;
          stroke-width: 30;
          stroke-dashoffset: -925;
        }
      
        90%, to {
          stroke-dasharray: 0 660;
          stroke-width: 20;
          stroke-dashoffset: -990;
        }
      }
      
      @keyframes ringB {
        from, 12% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -110;
        }
      
        20% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -115;
        }
      
        40% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -195;
        }
      
        48%, 62% {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
      
        70% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
      
        90% {
          stroke-dasharray: 20 200;
          stroke-width: 30;
          stroke-dashoffset: -305;
        }
      
        98%, to {
          stroke-dasharray: 0 220;
          stroke-width: 20;
          stroke-dashoffset: -330;
        }
      }
      
      @keyframes ringC {
        from {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }
      
        8% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }
      
        28% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }
      
        36%, 58% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
      
        66% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
      
        86% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }
      
        94%, to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }
      
      @keyframes ringD {
        from, 8% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: 0;
        }
      
        16% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -5;
        }
      
        36% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -175;
        }
      
        44%, 50% {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -220;
        }
      
        58% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -225;
        }
      
        78% {
          stroke-dasharray: 40 400;
          stroke-width: 30;
          stroke-dashoffset: -395;
        }
      
        86%, to {
          stroke-dasharray: 0 440;
          stroke-width: 20;
          stroke-dashoffset: -440;
        }
      }
    `
    ,
    type: "loader"
  },
  {
    html: `
        <div class="loadingspinner">
          <div id="square1"></div>
          <div id="square2"></div>
          <div id="square3"></div>
          <div id="square4"></div>
          <div id="square5"></div>
        </div>`,
    css: `.loadingspinner {
            --square: 26px;
            --offset: 30px;
            --duration: 2.4s;
            --delay: 0.2s;
            --timing-function: ease-in-out;
            --in-duration: 0.4s;
            --in-delay: 0.1s;
            --in-timing-function: ease-out;
            width: calc( 3 * var(--offset) + var(--square));
            height: calc( 2 * var(--offset) + var(--square));
            padding: 0px;
            margin-left: auto;
            margin-right: auto;
            margin-top: 10px;
            margin-bottom: 30px;
            position: relative;
          }
          
          .loadingspinner div {
            display: inline-block;
            background: darkorange;
              /*background: var(--text-color);*/
              /*box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.4);*/
            border: none;
            border-radius: 2px;
            width: var(--square);
            height: var(--square);
            position: absolute;
            padding: 0px;
            margin: 0px;
            font-size: 6pt;
            color: black;
          }
          
          .loadingspinner #square1 {
            left: calc( 0 * var(--offset) );
            top: calc( 0 * var(--offset) );
            animation: square1 var(--duration) var(--delay) var(--timing-function) infinite,
                         squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
          }
          
          .loadingspinner #square2 {
            left: calc( 0 * var(--offset) );
            top: calc( 1 * var(--offset) );
            animation: square2 var(--duration) var(--delay) var(--timing-function) infinite,
                        squarefadein var(--in-duration) calc(1 * var(--in-delay)) var(--in-timing-function) both;
          }
          
          .loadingspinner #square3 {
            left: calc( 1 * var(--offset) );
            top: calc( 1 * var(--offset) );
            animation: square3 var(--duration) var(--delay) var(--timing-function) infinite,
                         squarefadein var(--in-duration) calc(2 * var(--in-delay)) var(--in-timing-function) both;
          }
          
          .loadingspinner #square4 {
            left: calc( 2 * var(--offset) );
            top: calc( 1 * var(--offset) );
            animation: square4 var(--duration) var(--delay) var(--timing-function) infinite,
                         squarefadein var(--in-duration) calc(3 * var(--in-delay)) var(--in-timing-function) both;
          }
          
          .loadingspinner #square5 {
            left: calc( 3 * var(--offset) );
            top: calc( 1 * var(--offset) );
            animation: square5 var(--duration) var(--delay) var(--timing-function) infinite,
                         squarefadein var(--in-duration) calc(4 * var(--in-delay)) var(--in-timing-function) both;
          }
          
          @keyframes square1 {
            0% {
              left: calc( 0 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            8.333% {
              left: calc( 0 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            100% {
              left: calc( 0 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          }
          
          @keyframes square2 {
            0% {
              left: calc( 0 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            8.333% {
              left: calc( 0 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            16.67% {
              left: calc( 1 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            25.00% {
              left: calc( 1 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            83.33% {
              left: calc( 1 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            91.67% {
              left: calc( 1 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            100% {
              left: calc( 0 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          }
          
          @keyframes square3 {
            0%,100% {
              left: calc( 1 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            16.67% {
              left: calc( 1 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            25.00% {
              left: calc( 1 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            33.33% {
              left: calc( 2 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            41.67% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            66.67% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            75.00% {
              left: calc( 2 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            83.33% {
              left: calc( 1 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            91.67% {
              left: calc( 1 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          }
          
          @keyframes square4 {
            0% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            33.33% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            41.67% {
              left: calc( 2 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            50.00% {
              left: calc( 3 * var(--offset) );
              top: calc( 2 * var(--offset) );
            }
          
            58.33% {
              left: calc( 3 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            100% {
              left: calc( 3 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          }
          
          @keyframes square5 {
            0% {
              left: calc( 3 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            50.00% {
              left: calc( 3 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            58.33% {
              left: calc( 3 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            66.67% {
              left: calc( 2 * var(--offset) );
              top: calc( 0 * var(--offset) );
            }
          
            75.00% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          
            100% {
              left: calc( 2 * var(--offset) );
              top: calc( 1 * var(--offset) );
            }
          }
          
          @keyframes squarefadein {
            0% {
              transform: scale(0.75);
              opacity: 0.0;
            }
          
            100% {
              transform: scale(1.0);
              opacity: 1.0;
            }
          }`
    ,
    type: "loader"
  },
  {
    html: `<div class="loader">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>`,
    css: `/* The loader container */
       .loader {
         width: 200px;
         height: 200px;
         perspective: 200px;
       }
       
       
       /* The dot */
       .dot {
         position: absolute;
         top: 50%;
         left: 50%;
         width: 120px;
         height: 120px;
         margin-top: -60px;
         margin-left: -60px;
         border-radius: 100px;
         border: 40px outset #1e3f57;
         transform-origin: 50% 50%;
         transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         background-color: transparent;
         animation: dot1 1000ms cubic-bezier(.49,.06,.43,.85) infinite;
       }
       
       .dot:nth-child(2) {
         width: 140px;
         height: 140px;
         margin-top: -70px;
         margin-left: -70px;
         border-width: 30px;
         border-color: #447891;
         animation-name: dot2;
         animation-delay: 75ms;
         box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
         transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
       }
       
       .dot:nth-child(3) {
         width: 160px;
         height: 160px;
         margin-top: -80px;
         margin-left: -80px;
         border-width: 20px;
         border-color: #6bb2cd;
         animation-name: dot3;
         animation-delay: 150ms;
         box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
         transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
       }
       
       @keyframes dot1 {
         0% {
           border-color: #1e3f57;
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       
         50% {
           border-color: #1e574f;
           transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
         }
       
         100% {
           border-color: #1e3f57;
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       }
       
       @keyframes dot2 {
         0% {
           border-color: #447891;
           box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       
         50% {
           border-color: #449180;
           box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
           transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
         }
       
         100% {
           border-color: #447891;
           box-shadow: inset 0 0 15px 0 rgba(255, 255, 255, 0.2);
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       }
       
       @keyframes dot3 {
         0% {
           border-color: #6bb2cd;
           box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       
         50% {
           border-color: #6bcdb2;
           box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.8);
           transform: rotateX(20deg) rotateY(20deg) rotateZ(50deg) translateZ(0px);
         }
       
         100% {
           border-color: #6bb2cd;
           box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.1);
           transform: rotateX(24deg) rotateY(20deg) rotateZ(0deg) translateZ(-25px);
         }
       }`
    ,
    type: "loader"
  },
  {
    html: `<ul class="wave-menu">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      `,
    css: `.wave-menu {
        border: 4px solid #545FE5;
        border-radius: 50px;
        width: 200px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        cursor: pointer;
        transition: ease 0.2s;
        position: relative;
        background: #fff;
      }
      
      .wave-menu li {
        list-style: none;
        height: 30px;
        width: 4px;
        border-radius: 10px;
        background: #545FE5;
        margin: 0 6px;
        padding: 0;
        animation-name: wave1;
        animation-duration: 0.3s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        transition: ease 0.2s;
      }
      
      .wave-menu:hover > li {
        background: #fff;
      }
      
      .wave-menu:hover {
        background: #545FE5;
      }
      
      .wave-menu li:nth-child(2) {
        animation-name: wave2;
        animation-delay: 0.2s;
      }
      
      .wave-menu li:nth-child(3) {
        animation-name: wave3;
        animation-delay: 0.23s;
        animation-duration: 0.4s;
      }
      
      .wave-menu li:nth-child(4) {
        animation-name: wave4;
        animation-delay: 0.1s;
        animation-duration: 0.3s;
      }
      
      .wave-menu li:nth-child(5) {
        animation-delay: 0.5s;
      }
      
      .wave-menu li:nth-child(6) {
        animation-name: wave2;
        animation-duration: 0.5s;
      }
      
      .wave-menu li:nth-child(8) {
        animation-name: wave4;
        animation-delay: 0.4s;
        animation-duration: 0.25s;
      }
      
      .wave-menu li:nth-child(9) {
        animation-name: wave3;
        animation-delay: 0.15s;
      }
      
      @keyframes wave1 {
        from {
          transform: scaleY(1);
        }
      
        to {
          transform: scaleY(0.5);
        }
      }
      
      @keyframes wave2 {
        from {
          transform: scaleY(0.3);
        }
      
        to {
          transform: scaleY(0.6);
        }
      }
      
      @keyframes wave3 {
        from {
          transform: scaleY(0.6);
        }
      
        to {
          transform: scaleY(0.8);
        }
      }
      
      @keyframes wave4 {
        from {
          transform: scaleY(0.2);
        }
      
        to {
          transform: scaleY(0.5);
        }
      }
      `
    ,
    type: "loader"
  },
  {
    html: `<div class="three-body">
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        <div class="three-body__dot"></div>
        </div>`,
    css: `.three-body {
            --uib-size: 35px;
            --uib-speed: 0.8s;
            --uib-color: #5D3FD3;
            position: relative;
            display: inline-block;
            height: var(--uib-size);
            width: var(--uib-size);
            animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
           }
           
           .three-body__dot {
            position: absolute;
            height: 100%;
            width: 30%;
           }
           
           .three-body__dot:after {
            content: '';
            position: absolute;
            height: 0%;
            width: 100%;
            padding-bottom: 100%;
            background-color: var(--uib-color);
            border-radius: 50%;
           }
           
           .three-body__dot:nth-child(1) {
            bottom: 5%;
            left: 0;
            transform: rotate(60deg);
            transform-origin: 50% 85%;
           }
           
           .three-body__dot:nth-child(1)::after {
            bottom: 0;
            left: 0;
            animation: wobble1 var(--uib-speed) infinite ease-in-out;
            animation-delay: calc(var(--uib-speed) * -0.3);
           }
           
           .three-body__dot:nth-child(2) {
            bottom: 5%;
            right: 0;
            transform: rotate(-60deg);
            transform-origin: 50% 85%;
           }
           
           .three-body__dot:nth-child(2)::after {
            bottom: 0;
            left: 0;
            animation: wobble1 var(--uib-speed) infinite
               calc(var(--uib-speed) * -0.15) ease-in-out;
           }
           
           .three-body__dot:nth-child(3) {
            bottom: -5%;
            left: 0;
            transform: translateX(116.666%);
           }
           
           .three-body__dot:nth-child(3)::after {
            top: 0;
            left: 0;
            animation: wobble2 var(--uib-speed) infinite ease-in-out;
           }
           
           @keyframes spin78236 {
            0% {
             transform: rotate(0deg);
            }
           
            100% {
             transform: rotate(360deg);
            }
           }
           
           @keyframes wobble1 {
            0%,
             100% {
             transform: translateY(0%) scale(1);
             opacity: 1;
            }
           
            50% {
             transform: translateY(-66%) scale(0.65);
             opacity: 0.8;
            }
           }
           
           @keyframes wobble2 {
            0%,
             100% {
             transform: translateY(0%) scale(1);
             opacity: 1;
            }
           
            50% {
             transform: translateY(66%) scale(0.65);
             opacity: 0.8;
            }
           }
           `
    ,
    type: "loader"
  }
  ,
  {
    html: `<button>
    Click
</button>`,
    css: `button {
  width: fit-content;
  min-width: 100px;
  height: 45px;
  padding: 8px;
  border-radius: 5px;
  border: 2.5px solid #E0E1E4;
  box-shadow: 0px 0px 20px -20px;
  cursor: pointer;
  background-color: white;
  transition: all 0.2s ease-in-out 0ms;
  user-select: none;
  font-family: 'Poppins', sans-serif;
}

button:hover {
  background-color: #F2F2F2;
  box-shadow: 0px 0px 20px -18px;
}

button:active {
  transform: scale(0.95);
}`,
    type: 'button'
  },
  {
    html: `<button class="sendbtn">
    <div class="svg-wrapper-1">
      <div class="svg-wrapper">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
        </svg>
      </div>
    </div>
    <span>Send</span>
  </button>`,

    css: `.sendbtn {
    font-family: inherit;
    font-size: 20px;
    background: royalblue;
    color: white;
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    border: none;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.2s;
  }
  
  .sendbtn span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }
  
  .sendbtn svg {
    display: block;
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }
  
  .sendbtn:hover .svg-wrapper {
    animation: fly-1 0.6s ease-in-out infinite alternate;
  }
  
  .sendbtn:hover svg {
    transform: translateX(1.2em) rotate(45deg) scale(1.1);
  }
  
  .sendbtn:hover span {
    transform: translateX(5em);
  }
  
  .sendbtn:active {
    transform: scale(0.95);
  }
  
  @keyframes fly-1 {
    from {
      transform: translateY(0.1em);
    }
  
    to {
      transform: translateY(-0.1em);
    }
  }`,
    type: "button"
  },
  {
    html: `
    <button class="hoverme"><span class="text">Hover me</span><span>Thanks!</span></button>`,
    css: `.hoverme {
      position: relative;
      overflow: hidden;
      border: 1px solid #18181a;
      color: #18181a;
      display: inline-block;
      font-size: 15px;
      line-height: 15px;
      padding: 18px 18px 17px;
      text-decoration: none;
      cursor: pointer;
      background: #fff;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
     }
     
     .hoverme span:first-child {
      position: relative;
      transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 10;
     }
     
     .hoverme span:last-child {
      color: white;
      display: block;
      position: absolute;
      bottom: 0;
      transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
      z-index: 100;
      opacity: 0;
      top: 50%;
      left: 50%;
      transform: translateY(225%) translateX(-50%);
      height: 14px;
      line-height: 13px;
     }
     
     .hoverme:after {
      content: "";
      position: absolute;
      bottom: -50%;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      transform-origin: bottom center;
      transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
      transform: skewY(9.3deg) scaleY(0);
      z-index: 50;
     }
     
     .hoverme:hover:after {
      transform-origin: bottom center;
      transform: skewY(9.3deg) scaleY(2);
     }
     
     .hoverme:hover span:last-child {
      transform: translateX(-50%) translateY(-50%);
      opacity: 1;
      transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
     }`,
    type: "button"
  },
  {
    html: `<button class="instabtn">
    <svg viewBox="0 0 16 16" class="bi bi-instagram" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
      <span>Instragram</span>
  </button>
  
  `,
    css: `.instabtn {
    background: transparent;
    position: relative;
    padding: 5px 15px;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: 1px solid rgb(255,0,0);
    border-radius: 25px;
    outline: none;
    overflow: hidden;
    color: rgb(255,0,0);
    transition: color 0.3s 0.1s ease-out;
    text-align: center;
  }
  
  .instabtn span {
    margin: 10px;
  }
  
  .instabtn::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }
  
  .instabtn:hover {
    color: #fff;
    border: 1px solid rgb(255,0,0);
  }
  
  .instabtn:hover::before {
    box-shadow: inset 0 0 0 10em rgb(255, 0, 0);
  }`
  },
  {
    html: `<div class="light-button">
    <button class="bt">
        <div class="light-holder">
            <div class="light"></div>
        </div>
        <div class="button-holder">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
            </svg>
            <p>Discord</p>
        </div>
    </button>
</div>`,
    css: `.light-button button.bt {
  position: relative;
  height: 200px;
  display: flex;
  align-items: flex-end;
  outline: none;
  background: none;
  border: none;
}

.light-button button.bt .button-holder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100px;
  background-color: #0a0a0a;
  border-radius: 5px;
  color: #0f0f0f;
  font-weight: 700;
  transition: 300ms;
  outline: #0f0f0f 2px solid;
  outline-offset: 20;
}

.light-button button.bt .button-holder svg {
  height: 50px;
  fill: #0f0f0f;
  transition: 300ms;
}

.light-button button.bt .light-holder {
  position: absolute;
  height: 200px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.light-button button.bt .light-holder .dot {
  position: absolute;
  top: 0;
  width: 10px;
  height: 10px;
  background-color: #0a0a0a;
  border-radius: 10px;
  z-index: 2;
}

.light-button button.bt .light-holder .light {
  position: absolute;
  top: 0;
  width: 200px;
  height: 200px;
  clip-path: polygon(50% 0%, 25% 100%, 75% 100%);
  background: transparent;
}

.light-button button.bt:hover .button-holder svg {
  fill: rgba(88, 101, 242, 1);
}

.light-button button.bt:hover .button-holder {
  color: rgba(88, 101, 242, 1);
  outline: rgba(88, 101, 242, 1) 2px solid;
  outline-offset: 2px;
}

.light-button button.bt:hover .light-holder .light {
  background: rgb(255, 255, 255);
  background: linear-gradient(180deg, rgba(88, 101, 242, 1) 0%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
}`,
    type: "button"
  },
  {
    html: `<button class="sharebtn">
    <span>Share</span>
    <div class="container">
        <svg height="45" width="45" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
            <path fill="" d="M962.267429 233.179429q-38.253714 56.027429-92.598857 95.451429 0.585143 7.972571 0.585143 23.990857 0 74.313143-21.723429 148.260571t-65.974857 141.970286-105.398857 120.32-147.456 83.456-184.539429 31.158857q-154.843429 0-283.428571-82.870857 19.968 2.267429 44.544 2.267429 128.585143 0 229.156571-78.848-59.977143-1.170286-107.446857-36.864t-65.170286-91.136q18.870857 2.852571 34.889143 2.852571 24.576 0 48.566857-6.290286-64-13.165714-105.984-63.707429t-41.984-117.394286l0-2.267429q38.838857 21.723429 83.456 23.405714-37.741714-25.161143-59.977143-65.682286t-22.308571-87.990857q0-50.322286 25.161143-93.110857 69.12 85.138286 168.301714 136.265143t212.260571 56.832q-4.534857-21.723429-4.534857-42.276571 0-76.580571 53.979429-130.56t130.56-53.979429q80.018286 0 134.875429 58.294857 62.317714-11.995429 117.174857-44.544-21.138286 65.682286-81.115429 101.741714 53.174857-5.705143 106.276571-28.598857z"></path>
        </svg>
        <svg height="45" width="45" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
            <path fill="" d="M123.52064 667.99143l344.526782 229.708899 0-205.136409-190.802457-127.396658zM88.051421 585.717469l110.283674-73.717469-110.283674-73.717469 0 147.434938zM556.025711 897.627196l344.526782-229.708899-153.724325-102.824168-190.802457 127.396658 0 205.136409zM512 615.994287l155.406371-103.994287-155.406371-103.994287-155.406371 103.994287zM277.171833 458.832738l190.802457-127.396658 0-205.136409-344.526782 229.708899zM825.664905 512l110.283674 73.717469 0-147.434938zM746.828167 458.832738l153.724325-102.824168-344.526782-229.708899 0 205.136409zM1023.926868 356.00857l0 311.98286q0 23.402371-19.453221 36.566205l-467.901157 311.98286q-11.993715 7.459506-24.57249 7.459506t-24.57249-7.459506l-467.901157-311.98286q-19.453221-13.163834-19.453221-36.566205l0-311.98286q0-23.402371 19.453221-36.566205l467.901157-311.98286q11.993715-7.459506 24.57249-7.459506t24.57249 7.459506l467.901157 311.98286q19.453221 13.163834 19.453221 36.566205z"></path>
        </svg>
        <svg height="45" width="45" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
            <path fill="" d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
        </svg>
    </div>
</button>`,

    css: `.sharebtn {
  height: 4em;
  width: 15em;
  border: none;
  border-radius: 40px;
  background-color: #fff;
}

.sharebtn span {
  z-index: 1;
  display: inline-block;
  background-color: black;
  height: 3em;
  width: 11.5em;
  border-radius: 25px;
  color: #fff;
  line-height: 55px;
  font-size: 18px;
  letter-spacing: 3px;
  transition: all 0.5s;
}

.sharebtn .container {
  z-index: -1;
  width: 0;
  position: relative;
  display: flex;
  justify-content: center;
  transform: translateY(-50px);
  transition: all 0.4s;
}

.sharebtn .container svg {
  padding: 0 10px;
}

.sharebtn:hover span {
  width: 0;
}

.sharebtn:hover .container {
  z-index: 2;
  width: 100%;
}`,
    type: "button"
  },
  {
    html: `<a class="playstore-button" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="icon" viewBox="0 0 512 512">
      <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
    </svg>
    <span class="texts">
      <span class="text-1">GET IT ON</span>
      <span class="text-2">Google Play</span>
    </span>
  </a>`,
    css: `.playstore-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #000;
    border-radius: 9999px;
    background-color: rgba(0, 0, 0, 1);
    padding: 0.625rem 1.5rem;
    text-align: center;
    color: rgba(255, 255, 255, 1);
    outline: 0;
    transition: all  .2s ease;
    text-decoration: none;
  }
  
  .playstore-button:hover {
    background-color: transparent;
    color: rgba(0, 0, 0, 1);
  }
  
  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }
  
  .texts {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    line-height: 1;
  }
  
  .text-1 {
    margin-bottom: 0.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
  }
  
  .text-2 {
    font-weight: 600;
  }`,
    type: "button"
  },
  {
    html: `<div data-tooltip="Price:-$20" class="button">
    <div class="button-wrapper">
      <div class="text">Buy Now</div>
        <span class="icons">
          <svg viewBox="0 0 16 16" class="bi bi-cart2" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
    </svg>
        </span>
      </div>
    </div>
    
    `,
    css: `.button {
      --width: 100px;
      --height: 35px;
      --tooltip-height: 35px;
      --tooltip-width: 90px;
      --gap-between-tooltip-to-button: 18px;
      --button-color: #222;
      --tooltip-color: #fff;
      width: var(--width);
      height: var(--height);
      background: var(--button-color);
      position: relative;
      text-align: center;
      border-radius: 0.45em;
      font-family: "Arial";
      transition: background 0.3s;
    }
    
    .button::before {
      position: absolute;
      content: attr(data-tooltip);
      width: var(--tooltip-width);
      height: var(--tooltip-height);
      background-color: #555;
      font-size: 0.9rem;
      color: #fff;
      border-radius: .25em;
      line-height: var(--tooltip-height);
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) + 10px);
      left: calc(50% - var(--tooltip-width) / 2);
    }
    
    .button::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-top-color: #555;
      left: calc(50% - 10px);
      bottom: calc(100% + var(--gap-between-tooltip-to-button) - 10px);
    }
    
    .button::after,.button::before {
      opacity: 0;
      visibility: hidden;
      transition: all 0.5s;
    }
    
    .text {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .button-wrapper,.text,.icons {
      overflow: hidden;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      color: #fff;
    }
    
    .text {
      top: 0
    }
    
    .text,.icons {
      transition: top 0.5s;
    }
    
    .icons {
      color: #fff;
      top: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .icons svg {
      width: 24px;
      height: 24px;
    }
    
    .button:hover {
      background: #222;
    }
    
    .button:hover .text {
      top: -100%;
    }
    
    .button:hover .icons {
      top: 0;
    }
    
    .button:hover:before,.button:hover:after {
      opacity: 1;
      visibility: visible;
    }
    
    .button:hover:after {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
    }
    
    .button:hover:before {
      bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
    }
    
    
    
    `,
    type: "button"
  },
  {
    html: `<button class="githubbtn">
    <svg class="githubsvg" width="30" height="30" fill="#0092E4" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="github">
      <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"></path>
    </svg>
  </button>`,
    css: `.githubbtn {
    display: grid;
    place-items: center;
    background: #e3edf7;
    padding: 0.8em;
    border-radius: 10px;
    box-shadow: 6px 6px 10px -1px rgba(0,0,0,0.15),
          -6px -6px 10px -1px rgba(255,255,255,0.7);
    border: 1px solid rgba(0,0,0,0);
    cursor: pointer;
    transition: transform 0.5s;
  }
  
  .githubbtn:hover {
    box-shadow: inset 4px 4px 6px -1px rgba(0,0,0,0.2),
          inset -4px -4px 6px -1px rgba(255,255,255,0.7),
          -0.5px -0.5px 0px rgba(255,255,255,1),
          0.5px 0.5px 0px rgba(0,0,0,0.15),
          0px 12px 10px -10px rgba(0,0,0,0.05);
    border: 1px solid rgba(0,0,0,0.1);
    transform: translateY(0.5em);
  }
  
  .githubbtn .githubsvg {
    transition: transform 0.5s;
  }
  
  .githubbtn:hover .githubsvg {
    transform: scale(0.9);
    fill: #333333;
  }
  
  `,
    type: "button"
  },
  {
    html: `<button class="whatsappbtn">
    <p>Text me</p>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
    </svg>
</button>`,
    css: `.whatsappbtn {
  background-color: #fff;
  border: 1px solid #25D366;
  padding: 5px;
  position: relative;
  width: 6.2em;
  height: 2em;
  transition: 0.5s;
  font-size: 17px;
  border-radius: 0.4em;
}

.whatsappbtn p {
  position: absolute;
  top: 0.4em;
  left: 1.15em;
  margin: 0;
  padding: 0;
  transition: .5s;
  color: #25D366;
}

.whatsappbtn svg {
  position: absolute;
  top: 0.45em;
  right: 0.5em;
  margin: 0;
  padding: 0;
  opacity: 0;
  transition: 0.5s;
  height: 1em;
  fill: #fff
}

.whatsappbtn:hover p {
  left: 0.5em;
  color: #fff
}

.whatsappbtn:hover svg {
  opacity: 1;
}

.whatsappbtn:hover {
  background-color: #25D366;
}
`,
    type: "button"
  },
  {
    html: `<button class="twitterbtn">
    Sign in with Twitter
    <span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
    <path fill="#fff" d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path>
  </svg>
    </span>
  </button>`,
    css: `.twitterbtn {
    max-width: 320px;
    display: flex;
    overflow: hidden;
    position: relative;
    padding: 0.875rem 72px 0.875rem 1.75rem;
    background-color: #039be5;
    background-image: linear-gradient(to top right, #039be5,#29b6f6);
    color: #ffffff;
    font-size: 15px;
    line-height: 1.25rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    vertical-align: middle;
    align-items: center;
    border-radius: 0.5rem;
    gap: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: none;
    transition: all .6s  ease;
  }
  
  .twitterbtn span {
    background-color: rgb(3 155 229);
    display: grid;
    position: absolute;
    right: 0;
    place-items: center;
    width: 3rem;
    height: 100%;
  }
  
  .twitterbtn span svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  .twitterbtn:hover {
    box-shadow: 0 4px 30px  rgba(4, 175, 255, .1), 0 2px 30px rgba(11, 158, 255, 0.06);
  }`
  },
  {
    html: `<div class="main">
    <div class="up">
      <button class="card1">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="30px" height="30px" fill-rule="nonzero" class="instagram"><g fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path></g></g></svg>
      </button>
      <button class="card2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="30px" height="30px" class="twitter"><path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path></svg>
      </button>
    </div>
    <div class="down">
      <button class="card3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px" class="github">    <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path></svg>
      </button>
      <button class="card4">
        <svg height="30px" width="30px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" class="discord"><path d="M40,12c0,0-4.585-3.588-10-4l-0.488,0.976C34.408,10.174,36.654,11.891,39,14c-4.045-2.065-8.039-4-15-4s-10.955,1.935-15,4c2.346-2.109,5.018-4.015,9.488-5.024L18,8c-5.681,0.537-10,4-10,4s-5.121,7.425-6,22c5.162,5.953,13,6,13,6l1.639-2.185C13.857,36.848,10.715,35.121,8,32c3.238,2.45,8.125,5,16,5s12.762-2.55,16-5c-2.715,3.121-5.857,4.848-8.639,5.815L33,40c0,0,7.838-0.047,13-6C45.121,19.425,40,12,40,12z M17.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C21,28.209,19.433,30,17.5,30z M30.5,30c-1.933,0-3.5-1.791-3.5-4c0-2.209,1.567-4,3.5-4s3.5,1.791,3.5,4C34,28.209,32.433,30,30.5,30z"></path></svg>
      </button>
    </div>
  </div>`,
    css: `.main {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  
  .up {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }
  
  .down {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
  }
  
  .card1 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 90px 5px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .instagram {
    margin-top: 1.5em;
    margin-left: 1.2em;
    fill: #cc39a4;
  }
  
  .card2 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 90px 5px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .twitter {
    margin-top: 1.5em;
    margin-left: -.9em;
    fill: #03A9F4;
  }
  
  .card3 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 5px 90px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .github {
    margin-top: -.6em;
    margin-left: 1.2em;
  }
  
  .card4 {
    width: 90px;
    height: 90px;
    outline: none;
    border: none;
    background: white;
    border-radius: 5px 5px 90px 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    transition: .2s ease-in-out;
  }
  
  .discord {
    margin-top: -.9em;
    margin-left: -1.2em;
    fill: #8c9eff;
  }
  
  .card1:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #cc39a4;
  }
  
  .card1:hover .instagram {
    fill: white;
  }
  
  .card2:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #03A9F4;
  }
  
  .card2:hover .twitter {
    fill: white;
  }
  
  .card3:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: black;
  }
  
  .card3:hover .github {
    fill: white;
  }
  
  .card4:hover {
    cursor: pointer;
    scale: 1.1;
    background-color: #8c9eff;
  }
  
  .card4:hover .discord {
    fill: white;
  }`,
    type: "button"
  },
  {
    html: `<div class="loader"></div>`,
    css: `.loader {
      width: 48px;
      height: 48px;
      background: #353535;
      display: block;
      margin: 20px auto;
      position: relative;
      box-sizing: border-box;
      animation: rotationBack 1s ease-in-out infinite reverse;
    }
    
    .loader::before {
      content: '';
      box-sizing: border-box;
      left: 0;
      top: 0;
      transform: rotate(45deg);
      position: absolute;
      width: 48px;
      height: 48px;
      background: #2e2e2e;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }
    
    .loader::after {
      content: '';
      box-sizing: border-box;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      left: 50%;
      top: 50%;
      background: rgb(0, 0, 0);
      transform: translate(-50%, -50%);
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
    }
    
    @keyframes rotationBack {
      0% {
        transform: rotate(0deg);
      }
    
      100% {
        transform: rotate(-360deg);
      }
    }`,
    type: 'loader',
  },
  {
    html: `<div class="card">
    <div class="background">
    </div>
    <div class="logo">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" class="logo-svg">
        <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
        <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
        <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
      </svg>
    </div>
    <div class="box box1"><span class="icon"><svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
        </svg></span></div>
    <div class="box box2"> <span class="icon"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
        </svg></span></div>
    <div class="box box3"><span class="icon"><svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="svg">
          <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
        </svg></span></div>
    <div class="box box4"></div>
  </div>`,
    css: `.card {
    position: relative;
    width: 200px;
    height: 200px;
    background: lightgrey;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 1s ease-in-out;
  }
  
  .background {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 100% 107%, #ff89cc 0%, #9cb8ec 30%, #00ffee 60%, #62c2fe 100%);
  }
  
  .logo {
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
    transition: all 0.6s ease-in-out;
  }
  
  .logo .logo-svg {
    fill: white;
    width: 30px;
    height: 30px;
  }
  
  .icon {
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  
  .icon .svg {
    fill: rgba(255, 255, 255, 0.797);
    width: 100%;
    transition: all 0.5s ease-in-out;
  }
  
  .box {
    position: absolute;
    padding: 10px;
    text-align: right;
    background: rgba(255, 255, 255, 0.389);
    border-top: 2px solid rgb(255, 255, 255);
    border-right: 1px solid white;
    border-radius: 10% 13% 42% 0%/10% 12% 75% 0%;
    box-shadow: rgba(100, 100, 111, 0.364) -7px 7px 29px 0px;
    transform-origin: bottom left;
    transition: all 1s ease-in-out;
  }
  
  .box::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }
  
  .box:hover .svg {
    fill: white;
  }
  
  .box1 {
    width: 70%;
    height: 70%;
    bottom: -70%;
    left: -70%;
  }
  
  .box1::before {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #ff53d4 60%, #62c2fe 90%);
  }
  
  .box1:hover::before {
    opacity: 1;
  }
  
  .box1:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }
  
  .box2 {
    width: 50%;
    height: 50%;
    bottom: -50%;
    left: -50%;
    transition-delay: 0.2s;
  }
  
  .box2::before {
    background: radial-gradient(circle at 30% 107%, #91e9ff 0%, #00ACEE 90%);
  }
  
  .box2:hover::before {
    opacity: 1;
  }
  
  .box2:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }
  
  .box3 {
    width: 30%;
    height: 30%;
    bottom: -30%;
    left: -30%;
    transition-delay: 0.4s;
  }
  
  .box3::before {
    background: radial-gradient(circle at 30% 107%, #969fff 0%, #b349ff 90%);
  }
  
  .box3:hover::before {
    opacity: 1;
  }
  
  .box3:hover .icon .svg {
    filter: drop-shadow(0 0 5px white);
  }
  
  .box4 {
    width: 10%;
    height: 10%;
    bottom: -10%;
    left: -10%;
    transition-delay: 0.6s;
  }
  
  .card:hover {
    transform: scale(1.1);
  }
  
  .card:hover .box {
    bottom: -1px;
    left: -1px;
  }
  
  .card:hover .logo {
    transform: translate(0, 0);
    bottom: 20px;
    right: 20px;
  }`,
    type: "card",
  },
  {
    html: `<div class="card">
    <a href="#" class="socialContainer containerOne">
      <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
    </a>
    
    <a href="#" class="socialContainer containerTwo">
      <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
      
    <a href="#" class="socialContainer containerThree">
      <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
    </a>
    
    <a href="#" class="socialContainer containerFour">
      <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
    </a>
  </div>             
  
  `,
    css: `.card {
    width: fit-content;
    height: fit-content;
    background-color: rgb(238, 238, 238);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }
  
  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: .3s;
  }
  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: .3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128C7E;
    transition-duration: .3s;
  }
  
  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }
  
  .socialSvg {
    width: 17px;
  }
  
  .socialSvg path {
    fill: rgb(255, 255, 255);
  }
  
  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }
  
  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
  
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  
  `,
    type: "card"
  },
  {
    html: `<div class="card">
    <div class="container-image">
      <svg class="image-circle" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 335.76 195.21" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path class="fil-shoes1" d="M332.99 147.72c-0.87,-8.61 -2.43,-5.69 -1.57,-16.93 0.7,-9.13 -0.29,-27.37 -1.46,-37.14 -0.23,-1.89 -0.43,-5.19 -1.06,-8.26l-3.31 -12.45c-0.54,-1.82 -0.16,-2.7 -0.7,-4.36 -1.5,-4.56 -2.81,-6.58 -3.32,-12.45 -0.27,-3.05 0.85,-4.81 -1.89,-7.13 -1.31,-1.11 -2.14,-1.33 -3.74,-1.23 -10.29,0.69 -19.1,-4.44 -28.23,-7.89l-5.37 -2.51c-7.84,-3.92 -16.02,-10.9 -23.59,-15.81 -5.06,-3.28 -2.36,-0.49 -4.87,-5.83 -2.48,-5.29 -11.1,-6.93 -16.27,-8.5 -2.53,-0.76 -1.72,-0.99 -3.98,-1.68 -1.14,-0.35 -3.14,-0.5 -3.63,-0.76 -2.09,-1.09 -7.48,-4.47 -9.41,-4.76 -3.83,-0.58 -7,6.85 -9.59,10.32 -1.8,2.42 -3.23,5.65 -3.64,8.83 -0.22,1.71 -1.74,3.48 -2.63,5.16 -8.27,-3.97 -8.47,-1.81 -9.27,0.86 -1.69,5.63 -4.59,10.52 -6.25,16.27 -3.05,10.56 -6.49,6.16 -11.04,12.04 -1.64,2.12 -0.97,2.39 -3.42,3.9 -5.38,3.33 -9.5,0.93 -16.05,7.03 -10.09,9.4 -3.03,2.62 -9.55,5.65 -1.43,0.66 -3.15,2.01 -4.26,3.06 -2.1,2.01 -1.92,2.22 -3.22,4.67 -11.67,0 -10.17,6.25 -14.88,7.64 -4.6,1.36 -6.75,1.85 -9.78,5.42 -1.14,1.35 -2.27,3.88 -3.22,4.66 -1.61,1.31 -2.53,0.56 -4.95,2.37 -3.18,2.38 -6.99,3.65 -9.48,5.71 -2.55,2.1 -1.2,1.6 -4.73,3.15 -5.39,2.38 -10.82,3.14 -15.13,7.39 -1.64,1.62 -16.4,4.41 -18.66,4.98 -11.91,3.03 -25.8,4.05 -37.36,8.24 -6.1,2.21 -4.85,-2.22 -11.16,4.05 -4.74,4.71 -3.68,10.8 -6.22,16.29 -1.07,2.31 -1.69,1.85 -2.68,5.2l-1.44 5.87c-0.73,4.22 -2.36,6.72 -1.86,12.16l1.02 4.62c1.95,5.05 7.38,8.45 12.31,10.21l13.44 4.02c5.09,1.37 11.26,1.47 16.51,2.63 5.72,1.26 34.16,1.33 39.85,0.87 2.59,-0.21 3.66,0.35 5.75,0.84 3.42,0.8 4.45,-0.44 7.03,-0.28 2.33,0.14 3.31,1.06 6.8,1.09 9.62,0.08 90.6,0.66 98.33,-0.28 4.23,-0.52 10.35,0.74 14.86,0.26 11.36,-1.21 24.28,-2.91 36.17,-1.87 7.05,0.61 29.63,1.01 33.07,-1.51 1.48,0.99 29.81,-0.46 33.72,-0.68 8.78,-0.5 17.29,-6.69 16.8,-15.89 -0.1,-9.37 -1.8,-17.8 -2.75,-27.26z"></path></g></svg>
    </div>
    <div class="content">
      <div class="detail">
        <span>Lorem <br> Ipsum dolor.</span>
        <p>$199</p>
        <button>Buy</button>
      </div>
      <div class="product-image">
        <div class="box-image">
          <svg class="img-product" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 116.83 182.61" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="Layer_x0020_1"><metadata id="CorelCorpID_0Corel-Layer"></metadata><path class="fil-shoes2" d="M99.33 20.55c-4.24,-1.91 -3.3,-0.4 -8.3,-3.82 -4.06,-2.78 -12.82,-7.22 -17.68,-9.3 -0.94,-0.4 -2.53,-1.19 -4.13,-1.73l-6.69 -1.8c-0.99,-0.23 -1.3,-0.65 -2.22,-0.84 -2.53,-0.53 -3.82,-0.46 -6.69,-1.8 -1.49,-0.7 -2.01,-1.69 -3.83,-1.04 -0.87,0.31 -1.19,0.64 -1.58,1.41 -2.44,4.98 -7.2,7.7 -11.26,11.02l-2.61 1.83c-3.93,2.6 -9.38,4.53 -13.7,6.73 -2.89,1.47 -0.86,0.97 -4.02,0.7 -3.13,-0.27 -6.21,3.31 -8.33,5.29 -1.04,0.97 -0.92,0.53 -1.85,1.4 -0.47,0.44 -1.08,1.33 -1.33,1.49 -1.07,0.68 -4.09,2.28 -4.75,3.1 -1.3,1.63 1.31,5.1 2.23,7.24 0.64,1.49 1.76,3.02 3.13,4.07 0.74,0.56 1.15,1.74 1.7,2.61 -4.07,2.78 -3.12,3.46 -2.09,4.55 2.17,2.3 3.66,4.97 5.89,7.28 4.1,4.26 1.12,4.68 2.64,8.38 0.55,1.33 0.85,1.09 0.9,2.64 0.11,3.4 -2.12,4.67 -1.04,9.36 1.66,7.23 0.4,2.11 0.06,5.96 -0.07,0.84 0.09,2.01 0.28,2.8 0.37,1.51 0.52,1.49 1.31,2.75 -3.14,5.43 0.18,6.41 -0.44,8.98 -0.6,2.51 -0.95,3.64 -0.11,6.01 0.32,0.9 1.2,2.1 1.3,2.75 0.18,1.1 -0.42,1.33 -0.22,2.94 0.25,2.12 -0.18,4.23 0.11,5.95 0.29,1.75 0.42,0.99 0.2,3.05 -0.34,3.15 -1.45,5.88 -0.63,9.03 0.31,1.2 -2.36,8.82 -2.7,10.03 -1.79,6.36 -5.05,13.1 -6.2,19.61 -0.61,3.43 -2.34,1.66 -1.11,6.28 0.92,3.47 4.04,4.61 5.91,7.28 0.79,1.12 0.41,1.28 1.7,2.65l2.35 2.25c1.77,1.48 2.49,2.9 5.16,4.13l2.42 0.76c2.87,0.45 5.92,-1.16 8.06,-2.98l5.48 -5.18c2.01,-2 3.71,-4.85 5.66,-6.98 2.12,-2.32 9.8,-15.54 11.11,-18.32 0.6,-1.26 1.15,-1.61 1.93,-2.45 1.29,-1.38 0.99,-2.19 1.76,-3.35 0.69,-1.05 1.38,-1.26 2.33,-2.87 2.62,-4.45 24.66,-42 26.3,-45.85 0.9,-2.11 3.13,-4.62 4.12,-6.85 2.49,-5.61 5.17,-12.08 8.85,-17.34 2.18,-3.12 8.43,-13.52 8.19,-15.8 0.86,-0.42 7.8,-14 8.75,-15.88 2.13,-4.22 1.53,-9.85 -2.88,-12.09 -4.39,-2.47 -8.77,-3.95 -13.43,-6.05z"></path></g></svg>
        </div>
      </div>
    </div>
  </div>`,
    css: `.card {
    position: relative;
    background: transparent;
    width: 300px;
    height: 300px;
    border: none;
  }
  
  .card:hover {
    width: 300px;
  }
  
  .card .container-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #e7e7e7;
    width: 190px;
    height: 190px;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 3px 1px #1818183d, 2px 2px 3px #18181865, inset 2px 2px 2px #ffffff;
    transition: all .3s ease-in-out, opacity .3s;
    transition-delay: .6s, 0s;
  }
  
  .card:hover .container-image {
    opacity: 0;
    border-radius: 8px;
    transition-delay: 0s, .6s;
  }
  
  .card .container-image .image-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 125px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(2px 2px 2px #1818188a);
    transition: all .3s ease-in-out;
    transition-delay: .4s;
  }
  
  .card:hover .container-image .image-circle {
    opacity: 0;
    transition-delay: 0s;
  }
  
  .card .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #e7e7e7;
    padding: 20px;
    width: 190px;
    height: 190px;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: 0 0 3px 1px #1818183d, 2px 2px 3px #18181865, inset 2px 2px 2px #ffffff;
    visibility: hidden;
    transition: .3s ease-in-out;
    transition-delay: 0s;
    z-index: 1;
  }
  
  .card:hover .content {
    width: 290px;
    height: 190px;
    visibility: visible;
    transition-delay: .5s;
  }
  
  .card .content .detail {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    opacity: 0;
    transition: all .3s ease-in-out;
    transition-delay: 0s;
  }
  
  .card:hover .content .detail {
    color: #181818;
    opacity: 100%;
    transition: 1s;
    transition-delay: .3s;
  }
  
  .card .content .detail span {
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 800;
  }
  
  .card .content .detail button {
    background: #b8854b;
    margin-top: auto;
    width: 75px;
    height: 25px;
    color: #ffffff;
    font-size: 13px;
    border: none;
    border-radius: 8px;
    transition: .3s ease-in-out;
  }
  
  .card .content .detail button:hover {
    background: #d39f63;
  }
  
  .card .content .product-image {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .card .content .product-image .box-image {
    display: flex;
    position: absolute;
    top: 0;
    left: -25%;
    width: 100%;
    height: 115%;
    opacity: 0;
    transform: scale(.5);
    transition: all .5s ease-in-out;
    transition-delay: 0s;
  }
  
  .card:hover .content .product-image .box-image {
    top: -25%;
    left: 0;
    opacity: 100%;
    transform: scale(1);
    transition-delay: .3s;
  }
  
  .card .content .product-image .box-image .img-product {
    margin: auto;
    width: 7rem;
    height: auto;
  }
  
  .fil-shoes1, .fil-shoes2 {
    fill: #333333
  }`,
    type: "card"
  },

  {
    html: `<div class="card">
    <a class="social-link1">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
    </a>
    <a class="social-link2">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>          </a>
    <a class="social-link3">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="#fff"><path d="M232 237.2c31.8-15.2 48.4-38.2 48.4-74 0-70.6-52.6-87.8-113.3-87.8H0v354.4h171.8c64.4 0 124.9-30.9 124.9-102.9 0-44.5-21.1-77.4-64.7-89.7zM77.9 135.9H151c28.1 0 53.4 7.9 53.4 40.5 0 30.1-19.7 42.2-47.5 42.2h-79v-82.7zm83.3 233.7H77.9V272h84.9c34.3 0 56 14.3 56 50.6 0 35.8-25.9 47-57.6 47zm358.5-240.7H376V94h143.7v34.9zM576 305.2c0-75.9-44.4-139.2-124.9-139.2-78.2 0-131.3 58.8-131.3 135.8 0 79.9 50.3 134.7 131.3 134.7 61.3 0 101-27.6 120.1-86.3H509c-6.7 21.9-34.3 33.5-55.7 33.5-41.3 0-63-24.2-63-65.3h185.1c.3-4.2.6-8.7.6-13.2zM390.4 274c2.3-33.7 24.7-54.8 58.5-54.8 35.4 0 53.2 20.8 56.2 54.8H390.4z"></path></svg>
    </a>
    <a class="social-link4">
      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#fff"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
    </a>
  </div>`,
    css: `.card {
    display: flex;
    height: 70px;
    width: 270px;
  }
  
  .card svg {
    position: absolute;
    display: flex;
    width: 60%;
    height: 100%;
    font-size: 24px;
    font-weight: 700;
    opacity: 1;
    transition: opacity 0.25s;
    z-index: 2;
    cursor: pointer;
  }
  
  .card .social-link1,.card .social-link2,.card .social-link3,.card .social-link4 {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    color: whitesmoke;
    font-size: 24px;
    text-decoration: none;
    transition: 0.25s;
    border-radius: 50px;
  }
  
  .card svg {
    transform: scale(1);
  }
  
  .card .social-link1:hover {
    background-color: #1a1e22;
    animation: bounce_613 0.4s linear;
  }
  
  .card .social-link2:hover {
    background-color: #0a66c2;
    animation: bounce_613 0.4s linear;
  }
  
  .card .social-link3:hover {
    background-color: #0059f7;
    animation: bounce_613 0.4s linear;
  }
  
  .card .social-link4:hover {
    background-color: #1d4292;
    animation: bounce_613 0.4s linear;
  }
  
  @keyframes bounce_613 {
    40% {
      transform: scale(1.4);
    }
  
    60% {
      transform: scale(0.8);
    }
  
    80% {
      transform: scale(1.2);
    }
  
    100% {
      transform: scale(1);
    }
  }`,
    type: "card"
  },
  {
    html: `<div class="card">
    <div class="card-photo"></div>
    <div class="card-title">JOHN DOE <br>
        <span>Fullstack dev &amp; UX UI</span>
    </div>
    <div class="card-socials">
        <button class="card-socials-btn facebook">
            <svg data-name="Layer 21" height="24" id="Layer_21" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon"><title></title><path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path></svg>
        </button>
        <button class="card-socials-btn github">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
        </button>
        <button class="card-socials-btn linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512"><path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path></svg>
        </button>
    </div>
</div>`,
    css: `/* before adding the photo to the div with the "card-photo" class, in the css clear the styles for .card-photo and remove .card-photo::before and .card-photo::after, then set the desired styles for .card- photo. */

.card {
  --font-color: #fefefe;
  --font-color-sub: #7e7e7e;
  --bg-color: #111;
  --main-color: #fefefe;
  width: 200px;
  height: 254px;
  background: var(--bg-color);
  border: 2px solid var(--main-color);
  box-shadow: 4px 4px var(--main-color);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-photo {
/* clear and add new css */
  transform: scale(0.3) translate(220px, 230px);
  width: 250px;
  height: 250px;
  margin-left: -125px;
  margin-top: -125px;
  background: radial-gradient(circle,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 50.8%) 14% 30%/11% 11%,radial-gradient(circle,#ffdab9 50%,rgba(255,218,185,0) 50.8%) 10% 30%/16% 16%,radial-gradient(circle,#8b4513 50%,rgba(139,69,19,0) 50.8%) 7.5% 29%/20% 20%,radial-gradient(circle,rgba(0,0,0,0.15) 50%,rgba(0,0,0,0) 50.8%) 86% 30%/11% 11%,radial-gradient(circle,#ffdab9 50%,rgba(255,218,185,0) 50.8%) 90% 30%/16% 16%,radial-gradient(circle,#8b4513 50%,rgba(139,69,19,0) 50.8%) 92.5% 29%/20% 20%,radial-gradient(circle at 50% 0,#ffdab9 29.5%,#8b4513 30%,#8b4513 35%,rgba(139,69,19,0) 35.5%) 50% 95%/40% 20%,radial-gradient(ellipse at 50% 100%,rgba(139,69,19,0) 49%,#8b4513 49.5%,#8b4513 52%,rgba(139,69,19,0) 52.5%) 50% 110%/120% 40%,radial-gradient(circle at 50% 0,rgba(255,255,255,0) 35%,white 35%,white 45%,rgba(255,255,255,0) 45.5%) 50% 89%/40% 13%,linear-gradient(#8b4513,#8b4513) 37% 100%/.25em 22%,linear-gradient(#8b4513,#8b4513) 63% 100%/.25em 22%,linear-gradient(80deg,rgba(0,0,0,0) 50%,#333 50.5%) 24% 100%/1em 18%,linear-gradient(-80deg,rgba(0,0,0,0) 50%,#333 50.5%) 76% 100%/1em 18%,linear-gradient(162deg,rgba(0,0,0,0) 10%,#333 10%) 30% 100%/1.5em 21%,linear-gradient(-162deg,rgba(0,0,0,0) 10%,#333 10%) 70% 100%/1.5em 21%,radial-gradient(ellipse at 100% 100%,#556b2f 50%,rgba(85,107,47,0) 50.5%) 0 100%/37% 29%,radial-gradient(ellipse at 0 100%,#556b2f 50%,rgba(85,107,47,0) 50.5%) 100% 100%/37% 29%,radial-gradient(ellipse at 50% 100%,#222 51%,rgba(0,0,0,0) 51.5%) 50% 110%/120% 40%,radial-gradient(circle at 50% 0,rgba(0,0,0,0.15) 40%,rgba(0,0,0,0) 40.5%) 50% 82%/20% 20%,linear-gradient(to right,#8b4513 4px,rgba(139,69,19,0) 4px) 50% 80%/20% 20%,linear-gradient(to left,#8b4513 4px,rgba(139,69,19,0) 4px) 50% 80%/20% 20%,linear-gradient(#ffdab9,#ffdab9) 50% 80%/20% 20%,linear-gradient(#48240a,#48240a) 50% 100%/65% 60%,radial-gradient(circle,white 30%,rgba(255,255,255,0) 62%) 50% 50%/100% 100%;
  background-color: #ccc;
  background-repeat: no-repeat;
  border-radius: 30%;
}

/* delete */
.card-photo::before {
  display: block;
  content: '';
  position: absolute;
  box-sizing: border-box;
  width: 160px;
  height: 200px;
  left: 50%;
  top: -10%;
  margin-left: -80px;
  background: radial-gradient(circle at 50% 0,#ffdab9 30%,#8b4513 30.5%,#8b4513 41%,rgba(139,69,19,0) 41.5%) 50% 76%/2em 2em,radial-gradient(ellipse,rgba(139,69,19,0) 25%,#5e2f0d 25.5%,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 50% 100%/100% 40%,radial-gradient(ellipse at 50% 0,#8b4513 40%,#ffdab9 40.5%,#ffdab9 58%,rgba(255,218,185,0) 59%) 50% 83%/3em 1em,linear-gradient(#5e2f0d,#5e2f0d) 50% 86%/1em 1em,radial-gradient(circle,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 26% 56%/1em 1em,radial-gradient(circle,#5e2f0d 40%,rgba(139,69,19,0) 40.5%) 74% 56%/1em 1em,radial-gradient(ellipse,rgba(139,69,19,0) 52%,#8b4513 52.5%,#8b4513 55%,rgba(139,69,19,0) 55.5%) 50% 100%/150% 80%,radial-gradient(ellipse,rgba(0,0,0,0) 46%,rgba(0,0,0,0.15) 46.5%,rgba(0,0,0,0.15) 53%,rgba(0,0,0,0) 53%) 50% 100%/150% 80%,radial-gradient(ellipse,#ffdab9 53%,rgba(255,218,185,0) 53.5%) 50% 100%/150% 80%,radial-gradient(ellipse at 50% 100%,rgba(139,69,19,0) 35.5%,#8b4513 36%,#8b4513 38%,white 38.5%) 50% -45%/110% 60%,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 30% 26%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 40% 25%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 50% 24.5%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 60% 25%/1em 1em,radial-gradient(circle,#444 23%,rgba(0,0,0,0) 24%) 70% 26%/1em 1em,radial-gradient(ellipse,#666 63%,#8b4513 63.5%,#8b4513 66%,rgba(139,69,19,0) 66.5%) 50% 100%/150% 80%,radial-gradient(ellipse,rgba(139,69,19,0) 40%,#5e2f0d 40.5%) 50% 0/150% 80%,linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)) 50% 50%/100% 100%;
  background-repeat: no-repeat;
  background-color: #ffdab9;
  border-radius: 50% 50% 50% 50%/60% 60% 40% 40%;
  border: 4px solid #8b4513;
  box-shadow: inset 0 -.2em 0 .5em rgba(0,0,0,0.15),inset 0 -1.6em 0 #5e2f0d;
}

/* delete */
.card-photo::after {
  display: block;
  content: '';
  position: absolute;
  width: 2.5em;
  height: .8em;
  left: 28.5%;
  top: 26%;
  background-color: #5e2f0d;
  border-radius: .3em;
  box-shadow: 4.2em 0 0 #5e2f0d;
}

.card-title {
  text-align: center;
  color: var(--font-color);
  font-size: 20px;
  font-weight: 400;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.card-title span {
  font-size: 15px;
  color: var(--font-color-sub);
}

.card-socials {
  display: flex;
  height: 0;
  opacity: 0;
  margin-top: 20px;
  gap: 20px;
  transition: 0.5s;
}

.card-socials-btn {
  width: 25px;
  height: 25px;
  border: none;
  background: transparent;
  cursor: pointer;
}

.card-socials-btn svg {
  width: 100%;
  height: 100%;
  fill: var(--main-color);
}

.card:hover > .card-socials {
  opacity: 1;
  height: 35px;
}

.card-socials-btn:hover {
  transform: translateY(-5px);
  transition: all 0.15s;
}

.card-photo:hover {
  transition: 0.3s;
  transform: scale(0.4) translate(160px, 150px);
}`,
    type: "card"
  },
  {
    html: `<div class="card-container">
    <div class="card-header">Voice Chat</div>
    <div class="card-body">
      <audio controls="">
        <source type="audio/mpeg" src="">
        Your browser does not support the audio element.
      </audio>
    </div>
    <div class="card-footer">
        <button class="mute-button">Mute</button>
        <button class="unmute-button">Unmute</button>
    </div>
</div>
`,
    css: `.card-container {
  width: 330px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #333;
  color: #fff;
  padding: 10px;
  font-size: 20px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.card-body {
  padding: 10px;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.mute-button, .unmute-button {
  background-color: #333;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
}

.mute-button:hover, .unmute-button:hover {
  background-color: rgb(247, 247, 247);
  color: rgb(0, 0, 0);
}
`,
    type: "card"
  }


];