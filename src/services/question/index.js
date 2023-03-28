const { sequelize } = require('../../database')
const Question = require('../../models/Question');

// Write business logics in services file!!!
// TODO: use Loadash or Rambda to clean the ops to help reading

const calculateResult = (value1, value2, operator) => {
    // TODO: need adopt BigDecimal or simulated dependency to guarentee result
    let result = '';
    switch (operator) {
        case '+':
            result = Number(value1) + Number(value2); 
            break;
        case '-':
            result = Number(value1) - Number(value2);
            break;
        case '%':
            result = Number(value1) % Number(value2);
            break;
        case '*':
            result = Number(value1) * Number(value2);
            break;
        case '/':
            result = Number(value1) / Number(value2);
            break;
        default:
            throw new Error('we will continue working on it');
    }
    return result;
}

const createQuestion = async (body) => {
    try {
        await Question.create({
            data: body,
        });
    } catch (err) {
        console.error(err.message);
        throw new Error(err);
    }
};

const resolveQuesetion = async () => {
    const transaction = await sequelize.transaction();

    try {
        const result = await Question.findAll({
            attributes: ['id', 'data'],
            where: {
                status: 'PENDING',
            },
            raw: true,
            nest: true,
            lock: transaction.LOCK.UPDATE,
            transaction,
        })
        
        // TODO: can use child_process to seperated process here, if we don't concern fallback.
        if (result.length) {
            for (let idx = 0; idx < result.length; idx++) {
                const cell = result[idx];
                const { id, data } = cell;
                const { value1, value2, operator } = data;

                data.result = calculateResult(value1, value2, operator);
    
                await Question.update(
                    {
                        data,
                        status: 'DONE',
                    },
                    {
                        where: {
                            id,
                            status: 'PENDING', // For double ensurance
                        },
                        transaction,
                    },
                )
            }
        } else {
            console.log('empty');
        }
        await transaction.commit();
    } catch (err) {
        console.error(err.message)
        await transaction.rollback();
        throw new Error(err);
    }
}

module.exports = {
    createQuestion,
    resolveQuesetion,
};
