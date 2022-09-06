class Calculator
{
    constructor(operand1, operator, operand2) 
    {
        this._operand1 = operand1;
        this._operand2 = operand2;
        this._operation = operator;    
    }

    getFirstOperands = ()=>{
        return this._operand1;
    }

    getSecondOperands = ()=>{
        return this._operand2;
    }

    calculate = ()=>{
        switch(operator)
        {
            case '+':
                return this._operand1 + this._operand2;
            
            case '-':
                return this._operand1 - this._operand2;
                
            case '*':
                return this._operand1 * this._operand2;

            case '/':
                if (this._operand2 == 0) 
                {
                    return 'Math Error';    
                }
                return this._operand1 / this._operand2;
        }
    }
}