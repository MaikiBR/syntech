from lexer import lexer
from parser import parser


def main():
    while True:
        try:
            s = input('syntech > ')
        except EOFError:
            break
        if not s:
            continue
        result = parser.parse(s, lexer=lexer)
        print(result)


if __name__ == "__main__":
    main()
