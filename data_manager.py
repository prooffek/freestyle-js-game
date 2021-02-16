from psycopg2.extras import RealDictCursor
import connection


# @connection.connection_handler
# def get_questions(cursor: RealDictCursor):
#     query = """  SELECT *
#                 FROM questions
#            """
#     cursor.execute(query)
#     return cursor.fetchall()
#
#
# @connection.connection_handler
# def get_answers_to_question(cursor: RealDictCursor, id_question):
#     query = """
#             SELECT *
#             FROM answers
#             WHERE id_question = %(id_question)s
#     """
#     param = {
#         "id_question": id_question
#     }
#     cursor.execute(query, param)
#     return cursor.fetchall()

@connection.connection_handler
def questions(cursor:RealDictCursor, lvl: int):
    cursor.execute("""
        SELECT *
        FROM questions
    """)
    return cursor.fetchall()

