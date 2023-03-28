import sequelize from '../../database';
import Question from '../../models/Question';

interface QuestionType {
    value1: string | number,
    value2: string | number,
    operator: string,
    result?: number,
}

class QuestionService {
    private calculateResult = (value1: string, value2: string, operator: string): Number | Error => {
        // TODO: need adopt BigDecimal or simulated dependency to guarentee result
        let result;
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

    public create = async (body: QuestionType) => {
        try {
            await Question.create({
                data: body,
            });
        } catch (err: any) {
            console.error(err.message);
            throw new Error(err);
        }
    }

    public resolve = async () => {
        const transaction = await sequelize.transaction();
    
        try {
            const result = await Question.findAll({
                attributes: ['id', 'data'],
                where: {
                    status: 'PENDING',
                },
                raw: true,
                nest: true,
                lock: transaction.LOCK.UPDATE, // WARN: if huge maount, don't lock in find All, dangerous
                transaction,
            })
            
            // TODO: can use child_process to seperated process here, if we don't concern fallback.
            if (result.length) {
                for (let idx = 0; idx < result.length; idx++) {
                    const cell = result[idx];
                    const { id, data } = cell;
                    const { value1, value2, operator } = data;
    
                    data.result = this.calculateResult(value1, value2, operator);
        
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
        } catch (err: any) {
            console.error(err.message)
            await transaction.rollback();
            throw new Error(err);
        }
    }
}

export default new QuestionService();
