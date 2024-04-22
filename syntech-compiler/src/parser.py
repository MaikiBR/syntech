from lexer import tokens
import ply.yacc as yacc


def p_expression_header(p):
    'expression : HEADER'
    p[0] = f'<h{p[1][1]}>{p[1][3:-1]}</h{p[1][1]}>'


def p_expression_text(p):
    'expression : TEXT'
    p[0] = p[1]


def p_expression_multiple(p):
    'expression : expression expression'
    p[0] = p[1] + p[2]


def p_expression_bold(p):
    'expression : BOLD'
    p[0] = f'<b>{p[1][2:-2]}</b>'


def p_expression_italic(p):
    'expression : ITALIC'
    p[0] = f'<i>{p[1][1:-1]}</i>'


def p_error(p):
    print("Syntax error in input!")


parser = yacc.yacc()
