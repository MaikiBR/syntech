import unittest
from src.lexer import lexer
from src.parser import parser


class TestCompiler(unittest.TestCase):
    def test_header(self):
        result = parser.parse('#1{Encabezado}', lexer=lexer)
        self.assertEqual(result, '<h1>Encabezado</h1>')


if __name__ == '__main__':
    unittest.main()
