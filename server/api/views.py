from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Faq
from .serializers import FaqsSerializers

@api_view(['GET'])
def get_faqs(request):
    faqs = Faq.objects.all()
    serializedData = FaqsSerializers(faqs, many=True).data
    return Response(serializedData)

@api_view(['GET'])
def get_faqs_id(request, pk):
    try:
        faq = Faq.objects.get(pk=pk)
        serializer = FaqsSerializers(faq)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Faq.DoesNotExist:
        return Response({'error': 'FAQ not found'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['POST'])
def create_faqs(request):
    data = request.data
    serializer = FaqsSerializers(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE'])
def faqs_detail(request, pk):
    try:
        faq = Faq.objects.get(pk=pk)
    except Faq.DoesNotExist:
        return Response({'error': 'FAQ not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        faq.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        data = request.data
        serializer = FaqsSerializers(faq, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
