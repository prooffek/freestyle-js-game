from psycopg2.extras import RealDictCursor
import connection


@connection.connection_handler
def get_questions(cursor: RealDictCursor, lvl: int):
    query = """  SELECT *
                FROM questions
                WHERE level = %(lvl)s
           """
    param = {"lvl": f"{lvl}"}
    cursor.execute(query, param)
    return cursor.fetchall()


@connection.connection_handler
def get_answers_to_question(cursor: RealDictCursor, id_question):
    query = """
            SELECT *
            FROM answers
            WHERE id_question = %(id_question)s
    """
    param = {
        "id_question": id_question
    }
    cursor.execute(query, param)
    return cursor.fetchall()

@connection.connection_handler
def get_ranking(cursor: RealDictCursor):
    query = """
        SELECT *
        FROM ranking
    """
    cursor.execute(query)
    return cursor.fetchall()
#
# @connection.connection_handler
# def questions(cursor:RealDictCursor, lvl: int):
#     cursor.execute("""
#         SELECT *
#         FROM questions
#     """)
#     return cursor.fetchall()

