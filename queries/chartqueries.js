const { get } = require("../controller")

const chartQueries = {
    getImodAvgFromTextLength: `
    WITH joined_data AS (
    SELECT 
        ccpost_id, 
        post_type, 
        total_interactions, 
        reactions, 
        sads, 
        angrys, 
        gpt_ukraine_for_imod, 
        char_length(all_post_text) AS digitsInText
    FROM classification c
    INNER JOIN metrics m USING (ccpost_id)
)

SELECT 
    CONCAT((FLOOR(digitsInText / 60) * 60) + 1, '-', (FLOOR(digitsInText / 60) + 1) * 60) AS length_group,
    AVG(total_interactions) AS average_interactions,
    COUNT(*) AS total_posts_in_group
FROM joined_data
WHERE digitsInText <= 1200 and gpt_ukraine_for_imod = 'neutral'
GROUP BY FLOOR(digitsInText / 60)
ORDER BY FLOOR(digitsInText / 60)

    `
}
    module.exports = chartqueries