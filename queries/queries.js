const queries = {
    getForOverview: `select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod`,

    getAgainstOverview: `select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod`, 
    
    getNeutralOverview: `select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod`,

    getOverviewAll: `select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    group by country, gpt_ukraine_for_imod`,

    
    getAllForInDenmark: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Denmark") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInDenmark: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Denmark") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInDenmark: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Denmark") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInDenmark: `
    select country, \`name\`, ccpageid, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Denmark")
    group by country, \`name\`, gpt_ukraine_for_imod
    -- having count(*) > 50
    order by count(*) desc`,

    getAllForInGermany:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Germany") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInGermany: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Germany") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInGermany: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Germany") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInGermany: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Germany")
    group by country, gpt_ukraine_for_imod
    `,

    getAllForInFrance: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("France") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInFrance: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("France") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInFrance: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("France") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInFrance: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("France")
    group by country, gpt_ukraine_for_imod
    `,

    getAllForInMalta:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Malta") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInMalta:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Malta") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInMalta:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Malta") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInMalta:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Malta")
    group by country, gpt_ukraine_for_imod
    `,

    getAllForInWales:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Wales") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInWales:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Wales") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInWales:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Wales") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInWales:`
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Wales")
    group by country, gpt_ukraine_for_imod
    `,

    getAllForInSchweiz: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Schweiz") and gpt_ukraine_for_imod='for'
    group by country, gpt_ukraine_for_imod
    `,

    getAllAgainstInSchweiz: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Schweiz") and gpt_ukraine_for_imod='imod'
    group by country, gpt_ukraine_for_imod
    `,

    getAllNeutralInSchweiz: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Schweiz") and gpt_ukraine_for_imod='neutral'
    group by country, gpt_ukraine_for_imod
    `,

    getAllInSchweiz: `
    select country, gpt_ukraine_for_imod, count(*) as 'Antal posts' from sourcepop
    inner join metrics using (ccpageid)
    inner join classification using (ccpost_id)
    where country in ("Schweiz")
    group by country, gpt_ukraine_for_imod
    `,

};
module.exports = queries;
