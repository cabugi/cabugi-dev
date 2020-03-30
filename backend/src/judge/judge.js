const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const judge = async function(problemName, filePath, configPath) {
    var {stdout, stderr} = await exec(`echo "submit -tl 1 -ml 256000 ${problemName} CPP17 \"${filePath}\"" | dmoj-cli -c "${configPath}"`);

    var judge_response = [];

    // Compilation error
    if ( stdout.search("Failed compiling submission!") !== -1 ) {
        let qtd = 0;

        // Split in a list
        stdout = stdout.split('\n');
        stdout = stdout.slice(6, stdout.length - 4);
        stdout = stdout.join('\n');

        judge_response.push({
            "status_code": "CE",
            "error_log": stdout
        });

    } else {
        // Remove formatting
        stdout = stdout.replace(/\u001b\[\d+m/gi, '');
        
        // Split in a list
        stdout = stdout.split('\n');
        stdout = stdout.slice(6, stdout.length - 4);

        let batch = 0, test_case =  0;
        for (let i = 0; i < stdout.length; i++) {     
            if (stdout[i].search('Batch') !== -1) batch++;
            else {
                test_case++;
                si_split = stdout[i].split(' ').filter( item => (item.length > 0) );
                judge_response.push({
                    batch,
                    test_case,
                    "status_code": si_split[3],
                    "execution_time": ( si_split[4] === undefined ? undefined : si_split[4].slice(1) ), // remove first character
                    "execution_memory": ( si_split[7] === undefined ? undefined : si_split[7].slice(0, -1) ) // remove last character
                });
                //console.log(si_split[4]);
            }
        }
        //console.log(stdout);
    }
    return judge_response;
}

module.exports = judge;