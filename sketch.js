//Creating Sprites

/*var back_img, q4wrong, q4wr_img;
var geniussound;
var quesarriver;
var sc25,sc25_img;
var wrongsound;
var let, let_img;
var oneinf, oneinf_img;
var during, question5, question5_image;
var question1, question1_img;
var q1op1, question3c, question3c_img;
var q1op2, q1op3, q1op4;
var c1_img, c1, correct1sound;
var C1_img, info1;
var question3, ques3_img, ques3wr, ques3wr_img;
var ques2wrong, ques2wr_img, ques2c, ques2c_img;
var wrong, wrong_img, q4correct, q4correct_image;
var Question2, Ques2_image, question4, ques4_img;
var ques4wrong,ques4wrong_img;
var Question5c, question5c_image;
var Question5w, question5w_img;
var score = 0;

function preload() {
  //Assigning images and sounds
  back_img = loadImage(" First background.png");
  // during=loadImage("During game background.png");
  oneinf_img = loadImage("information_page.png");
  question1_img = loadImage("Q1.PNG");
  c1_img = loadImage("c1.PNG");
  //C1_img=loadImage("information of first question.PNG");
  wrong_img = loadImage("Wrong.PNG");
  Ques2_image = loadImage("question 2.PNG");
  ques2wr_img = loadImage("Wrong2 inf.PNG");
  ques2c_img = loadImage("op@ques2 correct.PNG");
  ques3_img = loadImage("question 3.PNG");
  question3c_img = loadImage("q3 correct.PNG");
  ques4wrong_img=loadImage("q4 wrong.PNG");
  ques3wr_img = loadImage("q3wr.PNG");
  ques4_img = loadImage("question 4.PNG");
  q4correct_image = loadImage("q4 correct.PNG");
  q4wr_img = loadImage("q4 wrong.PNG");
  question5_image = loadImage("Question no 5.PNG");
  question5c_image = loadImage("correct5.PNG");
  question5w_img = loadImage("question 5wrong.PNG");
  correct1sound = loadSound("Sounds/right sound.mp3");
  quesarriver = loadSound("Sounds/Question arriving.mp3");
  wrongsound=loadSound("Sounds/Wrong sound.mp3");
  sc25_img=loadImage("score=25.PNG");
  geniussound=loadSound("Sounds/Genius.m4a");
}


function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);

  //Create the Bodies Here.
  
//Starting Button
  this.button = createButton("Let's Play");
  this.button.position(displayWidth / 2.4  + 30, displayHeight / 1.7);
  this.button.style('width', '250px');
        this.button.style('height', '50px');
        this.button.style('background', 'yellow');


}






function draw() {
  rectMode(CENTER);
  background(rgb(198,135,103));
      image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1)
  textSize(30);
  fill(0, 199, 255);
  text("Score=" + score, displayWidth / 1.2 + 30, displayHeight / 2.9);
  // background(rgb(198,135,103));
  //image(back_img,0,-displayHeight*0,displayWidth/1, displayHeight*1);
  //Mouse pressed over starting button.
  this.button.mousePressed(() => {
    this.button.hide();
    //this.greeting.html("Hello ");
    //Creating first info
    oneinf = createSprite(displayWidth / 2 + 30, displayHeight / 2);
    oneinf.addImage("info", oneinf_img);
    //creating start button.
    this.StartQuiz = createButton("Start Quiz");
    this.StartQuiz.position(displayWidth / 1.4 + 30, displayHeight / 1.3);
    this.StartQuiz.style('height', '30px');
        this.StartQuiz.style('background', 'lightgreen')

    //Mouse pressed over Startquiz button
    this.StartQuiz.mousePressed(() => {
      //Question arriving sound
      quesarriver.play();
      //Making the first information invisible.
      oneinf.visible = false;
      //Hiding Startquiz button and displaying 1st question.
      this.StartQuiz.hide();
      question1 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
      question1.addImage("question1", question1_img);
      //Question1 option1
      this.q1o1 = createButton("A.De-oxyribonuclieo acid");
      this.q1o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
      //Question1 option2.
      this.q1o2 = createButton("B.Da-oxyribonuclieo antifoam")
      this.q1o2.position(displayWidth / 1.8 + 10, displayHeight / 1.7);

      //Question1 option2 mousepressed.
      this.q1o2.mousePressed(() => {
        //Displaying wrong question.
        wrongsound.play();
        wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
        wrong.addImage("Wrong", wrong_img);
        //Deducting score by 3.
        score = score - 3;

        //Hiding option 1 and 2 of question1.
        this.q1o1.hide();
        this.q1o2.hide();
        //Hiding question1.
        question1.visible = false;
        //making next option for question1 wrong answer.
        this.next1 = createButton("NEXT");
        this.next1.position(displayWidth / 1.4 + 10, displayHeight / 1.3);

//mousePressedof nextoption after giving first question wrong.
        this.next1.mousePressed(() => {
          quesarriver.play();
//Displaying question number two when first question is wrong.
          Question2 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
          Question2.addImage("Question2", Ques2_image);
          wrong.visible = false;
          this.next1.hide();
          this.q2o1 = createButton("A. Solar energy");
          this.q2o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);

          this.q2o2 = createButton("B.Earth’s magnetic field");
          this.q2o2.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
//MousePressedOver of correct option of  question2 when first is wrong.
          this.q2o2.mousePressed(() => {
            correct1sound.play();
            score = score + 5;
            this.q2o1.hide();
            this.q2o2.hide();
            ques2c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
            ques2c.addImage("Correct2", ques2c_img);
            Question2.visible = false;
            this.next6 = createButton("NEXT");
            this.next6.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
            //mousePressedover next when first is wrong and second is correct.
            this.next6.mousePressed(() => {
              this.next6.hide();
              quesarriver.play();
              ques2c.visible = false;
              question3 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
              question3.addImage("Question3", ques3_img);
              this.w3q3 = createButton("A.3,285,334 sq.km");
              this.w3q3.position(displayWidth / 2.9 + 10, displayHeight / 1.8);

              this.c3q3 = createButton("A.3,287,263 sq.km");
              this.c3q3.position(displayWidth / 1.8 + 10, displayHeight / 1.8);
//MousePressed over wrong option of question3 when first is correct and second is wrong.
              this.w3q3.mousePressed(() => {
                wrongsound.play();
                score = score - 3;
                this.w3q3.hide();
                this.c3q3.hide();
                question3.visible = false;
                ques3wr = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                ques3wr.addImage("Wrongmanyook", ques3wr_img);

                this.next15 = createButton("NEXT");
                this.next15.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//MousepressedOver next for first wrong second correct and third wrong.
                this.next15.mousePressed(() => {
                  quesarriver.play();
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("Nextquestion", ques4_img);
                  this.next15.hide();
                  ques3wr.visible = false;
                  this.w3q3.visible = false;

                  this.opq4 = createButton("A.74,377.00 rupees");
                  this.opq4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);

                  this.op2q4 = createButton("B.74,395.10 rupees");
                  this.op2q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
//MousePressed for correct option of question4 when first worng second correct and third wrong.
                  this.opq4.mousePressed(() => {
                    quesarriver.play();
                    score = score + 5;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("Q4correct", q4correct_image);
                    this.opq4.hide();
                    this.op2q4.hide();
                    question4.visible = false;
                    this.next16 = createButton("NEXT");
                    this.next16.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//MousePressed of next for first worng second correct third wrong and fourth correct.
                    this.next16.mousePressed(() => {
                      this.next16.hide();
                      quesarriver.play();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.q5o1 = createButton("1933");
                      this.q5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.q5o2 = createButton("1948");
                      this.q5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//MousePressedOver correct option of ques5 when 1wrong,2correct,3wrong and 4correct.
                      this.q5o1.mousePressed(() => {
                        score = score + 5;
                        correct1sound.play();
                        this.q5o2.hide();
                        this.q5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("Correct5", question5c_image);
                      })
  //MousePressedOver Wrong option of ques5 when 1wrong,2correct,3wrong and 4correct
                      this.q5o2.mousePressed(() => {
                      wrongsound.play();
                        score = score - 3;
                        this.q5o2.hide();
                        this.q5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("Wrong5", question5w_img);
                      })

                    })

                  })
 //MousePressed for wrong option of question4 when first worng second correct and third wrong.                 
                  this.op2q4.mousePressed(() => {
                    wrongsound.play();
                    score = score - 3;
                    this.op2q4.hide();
                    this.opq4.hide();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("Q4wrong", q4wr_img);
                    this.next17 = createButton("NEXT");
                    this.next17.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//NextPressedOver when 1,3,4 are wrong and 2 is correct.
                    this.next17.mousePressed(() => {
                      this.next17.hide();
                      quesarriver.play();
                      q4wrong.visible = false;

                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.cq5o1 = createButton("1933");
                      this.cq5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.wq5o2 = createButton("1948");
                      this.wq5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Correct option of question 5 selected when 1,3,4 are wrong and 2 is correct.
                      this.cq5o1.mousePressed(() => {
                        correct1sound.play();
                        score = score + 5;
                        this.wq5o2.hide();
                        this.cq5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("ACorrect5", question5c_image);
                      })
   //Wrong option of question 5 selected when 1,3,4 are wrong and 2 is correct.                   
                      this.wq5o2.mousePressed(() => {
                        wrongsound.play();
                        score = score - 3;
                        this.wq5o2.hide();
                        this.cq5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("AWrong5", question5w_img);
                      })

                    })

                  })

                })
              })
 //mousepressed over of correct option of question3 when first is wrong and second is correct             
              this.c3q3.mousePressed(() => {
                score=score+5;
                correct1sound.play();
                this.c3q3.hide();
                this.w3q3.hide();
                question3.visible = false;
                question3c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                question3c.addImage("Corrctansweris", question3c_img);
                this.next14 = createButton("NEXT");
                this.next14.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
 //Pressing next when first is wrong second is correct and third is correct.               
                this.next14.mousePressed(() => {
                  this.next14.hide();
                  quesarriver.play();
                  question3c.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("Next1question", ques4_img);
                  this.oq4 = createButton("A.74,377.00 rupees");
                  this.oq4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.o2q4 = createButton("B.74,395.10 rupees");
                  this.o2q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
 //Pressing correct option of question 4 in condition of 1 wrong and 2,3 correct.                 
                  this.oq4.mousePressed(() => {
                    score=score+5;
                    correct1sound.play();
                    this.oq4.hide();
                    this.o2q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("yesagain", q4correct_image);
                    this.next18 = createButton("NEXT");
                    this.next18.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when 1 is wrong and (2,3,4) are correct.
                    this.next18.mousePressed(() => {
                      this.next18.hide();
                      quesarriver.play();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.Aq5o1 = createButton("1933");
                      this.Aq5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.Bq5o2 = createButton("1948");
                      this.Bq5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing question5 correct when 1 is wrong and (2,3,4) are correct.
                      this.Aq5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.Bq5o2.hide();
                        this.Aq5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("BCorrect5", question5c_image);
                      })
 //Pressing question5 wrong when 1 is wrong and (2,3,4) are correct.                     
                      this.Bq5o2.mousePressed(() => {
                        score=score-3;
                        wrongsound.play();
                        this.Bq5o2.hide();
                        this.Aq5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("BWrong5", question5w_img);
                      })

                    })
                  })
 // //Pressing wrong option of ques 4  when 1 is wrong and (2,3) are correct.                
                  this.o2q4.mousePressed(() => {
                    score=score-3;
                    wrongsound.play();
                    this.o2q4.hide();
                    this.oq4.hide();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("notagain", q4wr_img);

                    this.next19 = createButton("NEXT");
                    this.next19.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when (1,4)W and (2,3)C.
                    this.next19.mousePressed(() => {
                      quesarriver.play();
                      this.next19.hide();
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qA5o1 = createButton("1933");
                      this.qA5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qA5o2 = createButton("1948");
                      this.qA5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing ques5 correct if (1,4)W and (2,3)C.
                      this.qA5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qA5o2.hide();
                        this.qA5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("CCorrect5", question5c_image);
                      })
//Choosing question5 wrong when (1,4)W and (2,3)C.                      
                      this.qA5o2.mousePressed(() => {
                        score=score-3;
                        wrongsound.play();
                        this.qA5o2.hide();
                        this.qA5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("CWrong5", question5w_img);
                      })

                    })

                  })


                })
              })

            })


          })
//MousePressedOver of wrong option of  question2 when first is wrong.
          this.q2o1.mousePressed(() => {
            score=score-3;
            wrongsound.play();
            this.q2o1.hide();
            this.q2o2.hide();
            Question2.visible = false;
            ques2wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
            ques2wrong.addImage("Wrong2", ques2wr_img);
            this.next5 = createButton("NEXT");
            this.next5.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when both first abd second are wrong.
            this.next5.mousePressed(() => {
              quesarriver.play();
              this.next5.hide();
              ques2wrong.visible = false;
              question3 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
              question3.addImage("Question 3", ques3_img);
              this.w2q3 = createButton("A.3,285,334 sq.km");
              this.w2q3.position(displayWidth / 2.9 + 10, displayHeight / 1.8);

              this.c2q3 = createButton("B.3,287,263 sq.km");
              this.c2q3.position(displayWidth / 1.8 + 10, displayHeight / 1.8);
//Selecting wrong option for question 3 when first and second are wrong.
              this.w2q3.mousePressed(() => {
                score=score-3;
                wrongsound.play();
                this.w2q3.hide();
                this.c2q3.hide();
                question3.visible = false;
                ques3wr = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                ques3wr.addImage("Wrongmanyoo", ques3wr_img);
                this.next13 = createButton("NEXT");
                this.next13.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when all 3 are wrong.
                this.next13.mousePressed(() => {
                  quesarriver.play();
                  this.next13.hide();
                  ques3wr.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("yahoo", ques4_img);
                  this.coq4 = createButton("A.74,377.00 rupees");
                  this.coq4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.wo2q4 = createButton("B.74,395.10 rupees");
                  this.wo2q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
 //Ques4 wrong when 1,2,3 are wrong.                 
                  this.wo2q4.mousePressed(()=>{
                    this.wo2q4.hide();
                    this.coq4.hide();
                    ques4wrong=createSprite(displayWidth/2 + 30, displayHeight/2);
                    ques4wrong.addImage("wr",ques4wrong_img);
                    score=score-3;
                    wrongsound.play();

                    this.next31=createButton("NEXT");
                    this.next31.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when all four are wrong.
                    
                      this.next31.mousePressed(() => {
                        quesarriver.play();
                        this.next31.hide();
                        ques4wrong.visible = false;
                        question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                        question5.addImage("Q5", question5_image);
                        this.q4B5o1 = createButton("1933");
                        this.q4B5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                        this.q4B5o2 = createButton("1948");
                        this.q4B5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
  //Pressing correct option of question 5 when all four are wrong .
                        this.q4B5o1.mousePressed(() => {
                          score=score+5;
                          correct1sound.play();
                          this.q4B5o2.hide();
                          this.q4B5o1.hide();
                          question5.visible = false;
                          Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                          Question5c.addImage("WCorrect5", question5c_image);
                        })
   //Pressing wrong option of question 5 when all four are wrong .                     
                        this.q4B5o2.mousePressed(() => {
                         score=score-3;
                           wrongsound.play();           
                          this.q4B5o2.hide();
                          this.q4B5o1.hide();
                          question5.visible = false;
                          Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                          Question5w.addImage("WWrong5", question5w_img);
                        
  
                      
  
                    })

                    })
                    
                  })
 //Pressing correct option of question4 when 1,2,3 are wrong.                
                  this.coq4.mousePressed(() => {
                    score=score+5;
                    correct1sound.play();
                    this.coq4.hide();
                    this.wo2q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("yesaagain", q4correct_image);

                    this.next20 = createButton("NEXT");
                    this.next20.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when 1,2,3 are wrong and 4 is correct.
                    this.next20.mousePressed(() => {
                      quesarriver.play();
                      this.next20.hide();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qB5o1 = createButton("1933");
                      this.qB5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qB5o2 = createButton("1948");
                      this.qB5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing correct option of question 5 when 1,2,3 are wrong and 4 is correct.
                      this.qB5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qB5o2.hide();
                        this.qB5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("WCorrect5", question5c_image);
                      })
 //Pressing wrong option of question 5 when 1,2,3 are wrong and 4 is correct.                     
                      this.qB5o2.mousePressed(() => {
                       score=score-3;
                         wrongsound.play();           
                        this.qB5o2.hide();
                        this.qB5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("WWrong5", question5w_img);
                      })

                    })

                  })
 ////Pressing wrong option of question 4 when 1,2,3 are wrong.                 
                   this.coq4.mousePressed(() => {
                    score=score+5;
                    correct1sound.play();
                    this.coq4.hide();
                    this.wo2q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("yesaagain", q4correct_image);

                    this.next20 = createButton("NEXT");
                    this.next20.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when all 4 questions are wrong.
                    this.next21.mousePressed(() => {
                      quesarriver.play();
                      this.next21.hide();
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qC5o1 = createButton("1933");
                      this.qC5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qC5o2 = createButton("1948");
                      this.qC5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing correct option of question 5 when 1,2,3,4 are wrong .
                      this.qC5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qC5o2.hide();
                        this.qC5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("DCorrect5", question5c_image);
                      })
//Pressing wrong option of question 5 when 1,2,3,4 are wrong.
                      this.qC5o2.mousePressed(() => {
                        score=score-3;
                        wrongsound.play();
                        this.qC5o2.hide();
                        this.qC5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("CWrong5", question5w_img);
                      })

                    })

                  })


                })
              })
 //Selecting question3 correct when both first and second are wrong.             
              this.c2q3.mousePressed(() => {
                score=score+5;
                correct1sound.play();

                this.c2q3.hide();
                this.w2q3.hide();
                question3.visible = false;
                question3c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                question3c.addImage("Correctansweris", question3c_img);
                this.next12 = createButton("NEXT");

                this.next12.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
 //Pressing next when 1,2 wrong while 3 correct.            
                this.next12.mousePressed(() => {
                  quesarriver.play();
                  this.next12.hide();
                  question3c.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("yahaoo", ques4_img);
                  this.c3oq4 = createButton("A.74,377.00 rupees");
                  this.c3oq4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.w3o2q4 = createButton("B.74,395.10 rupees");
                  this.w3o2q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
//Correct4 when 1,2 wr 3 cr.
                  this.c3oq4.mousePressed(() => {
                    score=score+5;
                    correct1sound.play();
                    this.c3oq4.hide();
                    this.w3o2q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("yesaagain", q4correct_image);

                    this.next29 = createButton("NEXT");
                    this.next29.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
 //Pressing next when 1,2 wrong and 3,4 correct.                   
 this.next29.mousePressed(() => {
  quesarriver.play();
  this.next29.hide();
  q4correct.visible = false;
  question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
  question5.addImage("Q5", question5_image);
  this.qB5oo1 = createButton("1933");
  this.qB5oo1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
  this.qB5oo2 = createButton("1948");
  this.qB5oo2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing correct option of question 5 when 1,2,3 are wrong and 4 is correct.
  this.qB5oo1.mousePressed(() => {
    score=score+5;
    correct1sound.play();
    this.qB5oo2.hide();
    this.qB5oo1.hide();
    question5.visible = false;
    Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
    Question5c.addImage("WCorrect5", question5c_image);
  })
//Pressing wrong option of question 5 when 1,2,3 are wrong and 4 is correct.                     
  this.qB5oo2.mousePressed(() => {
   score=score-3;
     wrongsound.play();           
    this.qB5oo2.hide();
    this.qB5oo1.hide();
    question5.visible = false;
    Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
    Question5w.addImage("WWrong5", question5w_img);
  

})

})

})




               
               
              })
            })

            })
          })


        })

      })
//Pressing correct option of question1.
      this.q1o1.mousePressed(() => {
        correct1sound.play();
        c1 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
        c1.addImage("correct1", c1_img);
        score = score + 5;

        question1.visible = false;
        this.q1o1.hide();
        this.q1o2.hide();

        //this.button4=createButton("PRESS HERE FOR MORE INFORMATION");
        //this.button4.position(displayWidth/1.8 + 10, displayHeight/1.7)


        this.next2 = createButton("NEXT");
        this.next2.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next if first question is correct.
        this.next2.mousePressed(() => {
          quesarriver.play();
          Question2 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
          Question2.addImage("Question2", Ques2_image);
          this.next2.hide();
          c1.visible = false;
          this.q2o1 = createButton("A. Solar energy");
          this.q2o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);

          this.q2o2 = createButton("B.Earth’s magnetic field");
          this.q2o2.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
//Pressing correct option of question 2 when first is correct.
          this.q2o2.mousePressed(() => {
            correct1sound.play();
            score=score+5;
            this.q2o2.hide();
            this.q2o1.hide();
            Question2.visible = false;
            ques2c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
            ques2c.addImage("Correct2", ques2c_img);
            this.next4 = createButton("NEXT");
            this.next4.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next if first,second question is correct.
            this.next4.mousePressed(() => {
              this.next4.hide();
              quesarriver.play();
              question3 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
              question3.addImage("Question 3", ques3_img);
              ques2c.visible = false;
              this.wq3 = createButton("A.3,285,334 sq.km");
              this.wq3.position(displayWidth / 2.9 + 10, displayHeight / 1.8);

              this.cq3 = createButton("A.3,287,263 sq.km");
              this.cq3.position(displayWidth / 1.8 + 10, displayHeight / 1.8);
 //Pressing wrong option of question3 when 1,2 are correct.             
              this.wq3.mousePressed(() => {
                score=score-3;
                wrongsound.play();
                this.wq3.hide();
                this.cq3.hide();
                question3.visible = false;
                ques3wr = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                ques3wr.addImage("Wrongth", ques3wr_img);
                this.next10 = createButton("NEXT");
                this.next10.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
   //Pressing next if first,2 question is correct and third is wrong.             
                this.next10.mousePressed(() => {
                  quesarriver.play();
                  this.next10.hide();
                  ques3wr.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("yahoo", ques4_img);
                  this.co1q4 = createButton("A.74,377.00 rupees");
                  this.co1q4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.w1o2q4 = createButton("B.74,395.10 rupees");
                  this.w1o2q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
 //Pressing ques4 correct if first,2 question is correct and third is wrong.                  
                  this.co1q4.mousePressed(() => {
                    score=score+5;
                    correct1sound.play();
                    this.co1q4.hide();
                    this.w1o2q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("y1esaagain", q4correct_image);

                    this.next22 = createButton("NEXT");
                    this.next22.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
////Pressing next if first,2,4 question is correct and third is wrong. 
                    this.next22.mousePressed(() => {
                      this.next22.hide();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qD5o1 = createButton("1933");
                      this.qD5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qD5o2 = createButton("1948");
                      this.qD5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Question5 correct when 1,2,4 Correct 3 Wrong.
                      this.qD5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qD5o2.hide();
                        this.qD5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("eCorrect5", question5c_image);
                      })
  //Pressing ques5 wrong if first,2,4 question is correct and third is wrong.                     
                      this.q5o2.mousePressed(() => {
                        this.q5o2.hide();
                        score=score-3;
                        wrongsound.play();
                        this.q5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("eWrong5", question5w_img);
                      })

                    })

                  })

//Pressing wrong option of question4 if first,2 question is correct and third is wrong. 
                  this.w1o2q4.mousePressed(() => {
                    this.w1o2q4.hide();
                    this.co1q4.hide();
                    score=score-3;
                    wrongsound.play();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("n1otaagain", q4wr_img);

                    this.next22 = createButton("NEXT");
                    this.next22.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next if first,2 question is correct and third,fourth is wrong. 
                    this.next22.mousePressed(() => {
                      this.next22.hide();
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qE5o1 = createButton("1933");
                      this.qE5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qE5o2 = createButton("1948");
                      this.qE5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Pressing ques5 correct if first,2 question is correct and third,4 is wrong. 
                      this.qE5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qE5o2.hide();
                        this.qE5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("TCorrect5", question5c_image);
                      })
 //Pressing ques5 wrong if first,2 question is correct and third,4 is wrong.                      
                      this.qE5o2.mousePressed(() => {
                        this.qE5o2.hide();
                        score=score-3;
                        wrongsound.play();
                        this.qE5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("TWrong5", question5w_img);
                      })

                    })

                  })
                })


              })
 //Pressing question3 correct if 1,2 are also correct.             
              this.cq3.mousePressed(() => {
                score=score+5;
                correct1sound.play();
                this.wq3.hide();
                this.cq3.hide();
                question3.visible = false;
                question3c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                question3c.addImage("Correctman", question3c_img);
                this.next11 = createButton("NEXT");
                this.next11.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
 //Pressing next when all first three are correct.                
                this.next11.mousePressed(() => {
                  quesarriver.play();
                  this.next11.hide();
                  question3c.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("1yahoo", ques4_img);
                  this.co11q4 = createButton("A.74,377.00 rupees");
                  this.co11q4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.w1o22q4 = createButton("B.74,395.10 rupees");
                  this.w1o22q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
  //Ques4 correct if all first three are correct.                
                  this.co11q4.mousePressed(() => {
                    correct1sound.play();
                    score=score+5;
                    this.co11q4.hide();
                    this.w1o22q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("1y1esaagain", q4correct_image);

                    this.next23 = createButton("NEXT");
                    this.next23.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when all four are correct.
                    this.next23.mousePressed(() => {
                      this.next23.hide();
                      quesarriver.play();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qF5o1 = createButton("1933");
                      this.qF5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qF5o2 = createButton("1948");
                      this.qF5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//All five correct in a row.
                      this.qF5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qF5o2.hide();
                        this.qF5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("PCorrect5", question5c_image);
                        if(score===25){
                          Question5c.visible=false;
                          sc25=createSprite(displayWidth/2 + 30,displayHeight/2);
                          sc25.addImage("Genius",sc25_img);
                          geniussound.play();

                        }
                      })
//1-4 correct and then selecting fifth wrong.                      
                      this.qF5o2.mousePressed(() => {
                        this.qF5o2.hide();
                        this.qF5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("RWrong5", question5w_img);
                      })

                    })

                  })
   //Fourth wrong when all first three are correct.               
                  this.w1o22q4.mousePressed(() => {
                  score=score-3;
                  wrongsound.play();
                    this.w1o22q4.hide();
                    this.co11q4.hide();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("1n1otaagain", q4wr_img);

                    this.next24 = createButton("NEXT");
                    this.next24.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//pressing next when 1,2,3 correct and fourth wrong.
                    this.next24.mousePressed(() => {
                      this.next24.hide();
                      quesarriver.play;
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.qQ5o1 = createButton("1933");
                      this.qQ5o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.qQ5o2 = createButton("1948");
                      this.qQ5o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//Q5 correct when 1-3 correct and 4 wrong.
                      this.qQ5o1.mousePressed(() => {
                        score=score+5;
                        correct1sound.play();
                        this.qQ5o2.hide();
                        this.qQ5o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("5Correct5", question5c_image);
                      })
 //Q5 wrong when 1-3 correct and 4 wrong.                     
                      this.qQ5o2.mousePressed(() => {
                        score=score-3;
                        wrongsound.play;
                                                this.qQ5o2.hide();
                        this.qQ5o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("%Wrong5", question5w_img);
                      })

                    })

                  })
                })

              })


            })


          })
//Wrong option of question2 when 1 is also wrong.
          this.q2o1.mousePressed(() => {
            score=score-3;
            wrongsound.play();
            this.q2o1.hide();
            this.q2o2.hide();
            Question2.visible = false;
            ques2wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
            ques2wrong.addImage("Wrong2", ques2wr_img);
            this.next7 = createButton("NEXT");
            this.next7.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//pressing next when first and second is correct.
            this.next7.mousePressed(() => {
             quesarriver.play();
              question3 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
              question3.addImage("Question 3", ques3_img);
              this.next7.hide();
              ques2wrong.visible = false;
              this.q3o1 = createButton("A.3,285,334 sq.km");
              this.q3o1.position(displayWidth / 2.9 + 10, displayHeight / 1.8);

              this.q3o2 = createButton("A.3,287,263 sq.km");
              this.q3o2.position(displayWidth / 1.8 + 10, displayHeight / 1.8);
//ques 3 correct when 1,2 are wrong.
              this.q3o2.mousePressed(() => {
                this.q3o1.hide();
                scor=score+5;
                correct1sound.play();
                this.q3o2.hide();
                question3.visible = false;
                question3c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                question3c.addImage("Correctanswer", question3c_img);
                this.next8 = createButton("NEXT");
                this.next8.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//pressing next when first and second are wrong and third is correct.
                this.next8.mousePressed(() => {
                  this.next8.hide();
                  quesarriver.play();
                  question3c.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("1yahoo", ques4_img);
                  this.co111q4 = createButton("A.74,377.00 rupees");
                  this.co111q4.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.w1o222q4 = createButton("B.74,395.10 rupees");
                  this.w1o222q4.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
 //Correct4 if 1,2 wrong and 3 correct.                 
                  this.co111q4.mousePressed(() => {
                    this.co111q4.hide();
                    score=score-3;
                    wrongsound.play();
                    this.w1o222q4.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("1y1es1aagain", q4correct_image);
                    this.next25 = createButton("NEXT");
                    this.next25.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Pressing next when 1,2 wrong and 3,4 correct.
                    this.next25.mousePressed(() => {
                      this.next25.hide();
                      quesarriver.play();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.q55o1 = createButton("1933");
                      this.q55o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.q55o2 = createButton("1948");
                      this.q55o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//q5 correct when 1-2 wrong,3-4 correct.
                      this.q55o1.mousePressed(() => {
                        this.q55o2.hide();
                        score=score+5;
                        correct1sound.play();
                        this.q55o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("Co3rrect5", question5c_image);
                      })
 //Wrong 5 when 1,2 wrong and 3,4 correct.                     
                      this.q55o2.mousePressed(() => {
                        score=score-3;
                        wrongsound.play();
                        this.q55o2.hide();
                        this.q55o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("W3rong5", question5w_img);
                      })

                    })



                  })
 //Ques4 wrong when 1,2 wrong and 3 correct.                 
                  this.w1o222q4.mousePressed(() => {
                    this.w1o222q4.hide();
                    score=score-3;
                    wrongsound.play();
                    this.co111q4.hide();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("1n1ot1aagain", q4wr_img);

                    this.next26 = createButton("NEXT");
                    this.next26.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Next when 1,2,4 wr 3 c.
                    this.next26.mousePressed(() => {
                      quesarriver.play();
                      this.next26.hide();
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.q51o1 = createButton("1933");
                      this.q51o1.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.q51o2 = createButton("1948");
                      this.q51o2.position(displayWidth / 2 + 10, displayHeight / 1.7);
//5 correct when 1,2,4wr,3c.
                      this.q51o1.mousePressed(() => {
                        this.q51o2.hide();
                        score=score+5;
                        correct1sound.play();
                        this.q51o1.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("C@orrect5", question5c_image);
                      })
 //5 wrong when 1,2,4wr,3c.                     
                      this.q51o2.mousePressed(() => {
                       score=score-3;
                       wrongsound.play();
                        this.q51o2.hide();
                        this.q51o1.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("@Wrong5", question5w_img);
                      })

                    })


                  })


                })

              })
   //1,2 correct so third wrong pressed.           
              this.q3o1.mousePressed(() => {
                score=score-3;
                wrongsound.play();
                this.q3o1.hide();
                this.q3o2.hide();
                this.next9 = createButton("NEXT");
                this.next9.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
                ques3wr = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                ques3wr.addImage("Wrongman", ques3wr_img);
                //question3c.visible=false;
  //Next pressed when 1,2 correct and third wrong.              
                this.next9.mousePressed(() => {
                  quesarriver.play();
                  this.next9.hide();
                  ques3wr.visible = false;
                  question4 = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                  question4.addImage("q4", ques4_img);
                  this.q4co = createButton("A.74,377.00 rupees");
                  this.q4co.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                  this.q4wr = createButton("B.74,395.10 rupees");
                  this.q4wr.position(displayWidth / 1.8 + 10, displayHeight / 1.7);
//ques4 correct pressed when 1,2 correct and third wrong.
                  this.q4co.mousePressed(() => {
                   score=score+5;
                   correct1sound.play();
                    this.q4co.hide();
                    this.q4wr.hide();
                    question4.visible = false;
                    q4correct = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4correct.addImage("1ye1es1aagain", q4correct_image);

                    this.next27 = createButton("NEXT");
                    this.next27.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Next pressed when 1,2,4 correct and third wrong.
                    this.next27.mousePressed(() => {
                      this.next27.hide();
                      quesarriver.play();
                      q4correct.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.q5o11 = createButton("1933");
                      this.q5o11.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.q5o21 = createButton("1948");
                      this.q5o21.position(displayWidth / 2 + 10, displayHeight / 1.7);
//q5corrct pressed when 1,2,4 correct and third wrong.
                      this.q5o11.mousePressed(() => {
                        this.q5o21.hide();
                        score=score+5;
                        correct1sound.play();
                        this.q5o11.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("Corre!ct5", question5c_image);
                      })
  //wrong of 5 pressed when 1,2,4 correct and third wrong.                    
                      this.q5o21.mousePressed(() => {
                        this.q5o21.hide();
                        this.q5o11.hide();
                        score=score-3;
                        wrongsound.play();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("Wr!ong5", question5w_img);
                      })

                    })

                  })
   //ques4 wrong pressed when 1,2 correct and third wrong.               
                  this.q4wr.mousePressed(() => {
                   score=score-3;
                   wrongsound.play();
                    this.q4wr.hide();
                    this.q4co.hide();
                    question4.visible = false;
                    q4wrong = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                    q4wrong.addImage("1n1ot1aagaain", q4wr_img);

                    this.next28 = createButton("NEXT");
                    this.next28.position(displayWidth / 1.5 + 10, displayHeight / 1.6);
//Next pressed when 1,2 correct and third,4 wrong.
                    this.next28.mousePressed(() => {
                      this.next28.hide();
                      quesarriver.play();
                      q4wrong.visible = false;
                      question5 = createSprite(displayWidth / 2 + 30, displayHeight / 2)
                      question5.addImage("Q5", question5_image);
                      this.q5o19 = createButton("1933");
                      this.q5o19.position(displayWidth / 2.9 + 10, displayHeight / 1.7);
                      this.q5o29 = createButton("1948");
                      this.q5o29.position(displayWidth / 2 + 10, displayHeight / 1.7);
//ques5c pressed when 1,2 correct and third,4 wrong.
                      this.q5o19.mousePressed(() => {
                        this.q5o29.hide();
                        score=score+5;
                        correct1sound.play();
                        this.q5o19.hide();
                        question5.visible = false;
                        Question5c = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5c.addImage("&Correct5", question5c_image);
                      })
  //wrong5 pressed when 1,2 correct and third,4 wrong.                    
                      this.q5o29.mousePressed(() => {
                        this.q5o29.hide();
                        score=score-3;
                        wrongsound.play();
                        this.q5o19.hide();
                        question5.visible = false;
                        Question5w = createSprite(displayWidth / 2 + 30, displayHeight / 2);
                        Question5w.addImage("Wrong5*", question5w_img);
                      })

                    })

                  })

                })



              })

            })
          })

        })

      })



    })


  })

  drawSprites();
}*/

var recopy;
var recopy1;
function preload(){
  recopy=loadImage("First background.png");
}

function setup(){
  recopy1=createSprite(windowWidth/2.4 + 30, windowHeight/2.3);
  recopy1.addImage("copy", recopy);
}
function draw(){
  drawSprites();
}



