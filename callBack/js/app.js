document.getElementById('startButton').addEventListener('click', () => {
    startProcess(() => {
        markStepCompleted(1);
        receivedData(() => {
            markStepCompleted(2);
            dataProcessing(() => {
                markStepCompleted(3);
                dataStorage(() => {
                    markStepCompleted(4);
                    dataValidation(() => {
                        markStepCompleted(5);
                        applyChanges(() => {
                            markStepCompleted(6);
                            CreateAnOutput(() => {
                                markStepCompleted(7);
                                sendOutput(() => {
                                    markStepCompleted(8);
                                    cleaning(() => {
                                        markStepCompleted(9);
                                        endOfProcess(() => {
                                            markStepCompleted(10);
                                            console.log("All Steps Completed.");
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});

function markStepCompleted(stepNumber) {
    const steps = document.querySelectorAll('.step');
    steps[stepNumber - 1].classList.add('completed');
}





function startProcess(callBack) {
    console.log("Start The Process");
    setTimeout(() => {
        console.log("Step 1: Done.");
        callBack();
    }, 5000);
}

function receivedData(callBack) {
    console.log("Receive Data...");
    setTimeout(()=> {
        console.log("Step 2: Done.");
        callBack();
    }, 3000);
}

function dataProcessing(callBack) {
    console.log("Data processing ... ")
    setTimeout(()=> {
        console.log("Step 3: Done.");
        callBack();
    }, 2500);
} 

function dataStorage(callBack) {
    console.log("data strotage ... ");
    setTimeout(()=> {
        console.log("Step 4: Done");
        callBack();
    }, 2000);
}

function dataValidation(callBack) {
    console.log("Data validation ...")
    setTimeout(()=> {
        console.log("Step 5: Done.");
        callBack();
    }, 1000)
}

function applyChanges(callBack) {
    console.log("apply changes ... ");
    setTimeout(()=> {
        console.log("Step 6: Done");
        callBack();
    }, 4000);
}

function CreateAnOutput(callBack) {
    console.log("Create an output ...")
    setTimeout(()=> {
        console.log("Step 7: Done.");
        callBack();
    }, 2500);
}

function sendOutput(callBack) {
    console.log("Send output ...");
    setTimeout(()=> {
        console.log("Step 8: Done");
        callBack();
    }, 1000);;
}

function cleaning(callBack) {
    console.log("Cleaning ...");
    setTimeout(()=> {
        console.log("Step 9: Done.");
        callBack();
    }, 2000);
}
function endOfProcess(callBack) {
    console.log("End of process.")
    setTimeout(()=> {
        console.log("Step 10: Done");
        callBack();
    }, 500)
}

