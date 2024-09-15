from rest_framework import serializers
from .models import Faq


class FaqsSerializers(serializers.ModelSerializer):
    class Meta:
        model=Faq
        fields='__all__'